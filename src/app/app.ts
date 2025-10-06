// src/app/app.ts

import { Component, signal } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,  <-- REMOVE THIS LINE
    MatToolbar, 
    AddTaskComponent, 
    TaskListComponent, 
    MatCard, 
    MatCardHeader, 
    MatCardTitle, 
    MatCardContent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('todo-app');
}