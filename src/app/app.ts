import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from "@angular/material/toolbar";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('todo-app');
}
