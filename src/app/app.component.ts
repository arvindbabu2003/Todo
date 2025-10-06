// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    AddTaskComponent,
    TaskListComponent
  ],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <img src="todo-logo.jpg" alt="Todo App Logo" class="app-logo">
    </mat-toolbar>
    
    <div class="app-container">
      <mat-card class="add-task-card">
        <mat-card-header>
          <mat-card-title>Add New Task</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-add-task></app-add-task>
        </mat-card-content>
      </mat-card>
      <mat-card class="task-list-card">
        <mat-card-header>
          <mat-card-title>Your Tasks</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-task-list></app-task-list>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
    }
    .app-logo {
      height: 40px;
      margin-right: 12px;
    }
    .app-title {
      font-size: 1.5em;
      font-weight: 500;
    }
    .app-container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .add-task-card, .task-list-card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    .add-task-card {
      order: 1;
    }
    .task-list-card {
      order: 2;
      flex: 1;
    }
    @media (min-width: 768px) {
      .app-container {
        flex-direction: row;
        align-items: flex-start;
      }
      .add-task-card {
        flex: 0 0 400px;
        order: 1;
      }
      .task-list-card {
        flex: 1;
        order: 2;
        margin-left: 20px;
      }
    }
  `]
})
export class AppComponent {}