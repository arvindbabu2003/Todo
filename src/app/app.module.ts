// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  // ✅ FIX: Remove all standalone components from 'declarations' (NG6008 fix)
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatToolbarModule,

    // Standalone component imports
    AppComponent,       // Standalone component must be imported.
    TaskListComponent,  // Standalone component must be imported.
    TaskItemComponent,  // Standalone component must be imported.
    AddTaskComponent
  ],
  providers: [],
  // ✅ FIX: Remove AppComponent from 'bootstrap' because it is standalone (-996009 fix)
  // The application must now be bootstrapped using bootstrapApplication in main.ts
  bootstrap: []
})
export class AppModule {}