import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { TaskListComponent } from './app/components/task-list/task-list.component';
import { AddTaskComponent } from './app/components/add-task/add-task.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: AddTaskComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
