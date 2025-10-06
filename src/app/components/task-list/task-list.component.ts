
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 

import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; 
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    TaskItemComponent, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule 
  ],
  template: `
    <h2>Task List</h2>
    <div style="margin-bottom: 10px;">
      <button mat-raised-button (click)="sortByPriority()">Sort by Priority</button>
      <button mat-raised-button (click)="sortByDate()" style="margin-left: 10px;">Sort by Date</button>
      <mat-form-field appearance="fill" style="margin-left: 10px; width: 200px;">
        <mat-label>Filter by Category</mat-label>
        <input matInput [(ngModel)]="filterCategory" (input)="filterTasks()" placeholder="Enter category" />
      </mat-form-field>
    </div>
    <app-task-item
      *ngFor="let task of filteredTasks"
      [task]="task"
      (remove)="confirmDelete(task)"       (toggleEvent)="toggleComplete(task)">
    </app-task-item>
  `
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterCategory: string = '';
  private sub?: Subscription;

  constructor(private taskService: TaskService, private dialog: MatDialog) {} 

  ngOnInit() {
    this.sub = this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
      this.filterTasks();
    });
  }

  
  confirmDelete(task: Task): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteTask(task);
      }
    });
  }

 
  deleteTask(task: Task) {
    if (task.id) {
      this.taskService.deleteTask(task.id);
    }
  }

  toggleComplete(task: Task) {
    this.taskService.toggleComplete(task);
  }

  sortByPriority() {
    this.tasks = [...this.tasks].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
    this.filterTasks();
  }

  sortByDate() {
    this.tasks = [...this.tasks].sort((a, b) => new Date(b.createdAt?.toDate() || 0).getTime() - new Date(a.createdAt?.toDate() || 0).getTime());
    this.filterTasks();
  }

  filterTasks() {
    if (this.filterCategory.trim()) {
      this.filteredTasks = this.tasks.filter(task => task.category?.toLowerCase().includes(this.filterCategory.toLowerCase()));
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}