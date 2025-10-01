import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnDestroy {
  private app = getApps().length ? getApp() : initializeApp(environment.firebase);
  private db = getFirestore(this.app);
  private tasksSubj = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubj.asObservable();
  private unsubSnapshot: any = null;

  constructor() {
    this.startSync();
  }

  private startSync() {
    const tasksRef = collection(this.db, 'tasks');
    const q = query(tasksRef, orderBy('createdAt', 'desc'));

    if (this.unsubSnapshot) this.unsubSnapshot();

    this.unsubSnapshot = onSnapshot(q, snapshot => {
      const tasks: Task[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        tasks.push({
          id: docSnap.id,
          title: data['title'],
          description: data['description'],
          completed: data['completed'],
          category: data['category'],
          priority: data['priority'],
          createdAt: data['createdAt'],
          dueDate: data['dueDate']
        });
      });
      this.tasksSubj.next(tasks);
    }, err => console.error('Snapshot error', err));
  }

  async addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const tasksRef = collection(this.db, 'tasks');
    return await addDoc(tasksRef, { ...task, createdAt: serverTimestamp() });
  }

  async toggleComplete(task: Task) {
    if (!task.id) return;
    const d = doc(this.db, 'tasks', task.id);
    await updateDoc(d, { completed: !task.completed });
  }

  async deleteTask(id: string) {
    const d = doc(this.db, 'tasks', id);
    await deleteDoc(d);
  }

  ngOnDestroy() {
    if (this.unsubSnapshot) this.unsubSnapshot();
  }
}
