import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  template: `
    <div style="margin: 20px; max-width: 400px;">
      <mat-form-field appearance="fill" style="width: 100%;">
        <mat-label>Title</mat-label>
        <input matInput placeholder="Enter task title" [(ngModel)]="title" />
      </mat-form-field>

      <mat-form-field appearance="fill" style="width: 100%; margin-top: 10px;">
        <mat-label>Description</mat-label>
        <textarea matInput placeholder="Enter description (optional)" [(ngModel)]="description"></textarea>
      </mat-form-field>

      <mat-form-field appearance="fill" style="width: 100%; margin-top: 10px;">
        <mat-label>Category</mat-label>
        <input matInput placeholder="Category (optional)" [(ngModel)]="category" />
      </mat-form-field>

      <mat-form-field appearance="fill" style="width: 100%; margin-top: 10px;">
        <mat-label>Priority</mat-label>
        <input type="number" min="1" max="3" matInput placeholder="Priority (1-high, 3-low)" [(ngModel)]="priority" />
      </mat-form-field>

      <mat-form-field appearance="fill" style="width: 100%; margin-top: 10px;">
        <mat-label>Due Date</mat-label>
        <input type="date" matInput [(ngModel)]="dueDate" />
      </mat-form-field>

      <button mat-raised-button color="primary" style="margin-top: 15px;" (click)="addTask()">
        Add Task
      </button>
    </div>
  `
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';
  category: string = '';
  priority: number | null = null;
  dueDate: string = '';

  constructor(private taskService: TaskService) {}

  async addTask() {
    if (!this.title.trim()) return;

    let finalDueDate: Date | undefined;

   
    if (this.dueDate) {
      finalDueDate = new Date(`${this.dueDate}T00:00:00`);
    } else {
      finalDueDate = undefined;
    }

    const newTask = {
      title: this.title.trim(),
      description: this.description.trim() || undefined,
      completed: false,
      category: this.category.trim() || undefined,
      priority: this.priority || undefined,
      dueDate: finalDueDate // Use the corrected Date object
    };

    try {
      await this.taskService.addTask(newTask);
      this.title = '';
      this.description = '';
      this.category = '';
      this.priority = null;
      this.dueDate = '';
    } catch (err) {
      console.error('Add task error:', err);
    }
  }
}