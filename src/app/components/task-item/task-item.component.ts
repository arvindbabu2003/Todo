import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule
  ],
  template: `
    <mat-list-item>
      <mat-checkbox [checked]="task.completed" (change)="onToggle()"></mat-checkbox>
      <div class="content">
        <div class="title" [class.completed]="task.completed">{{ task.title }}</div>
        <div class="details" *ngIf="task.description || task.category || task.priority || task.dueDate">
          <span *ngIf="task.description" class="description">{{ task.description }}</span>
          <span *ngIf="task.category" class="category">Category: {{ task.category }}</span>
          <span *ngIf="task.priority" class="priority">Priority: {{ task.priority }}</span>
          <span *ngIf="task.dueDate" class="due-date">Due: {{ task.dueDate.toDate() | date:'short' }}</span>
        </div>
      </div>
      <button mat-icon-button matTooltip="Delete" (click)="remove.emit(task)">
        <mat-icon>delete</mat-icon>
      </button>
    </mat-list-item>
    <mat-divider></mat-divider>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
      color: gray;
    }
    .content {
      flex: 1;
      margin-left: 10px;
    }
    .title {
      font-weight: bold;
    }
    .details {
      font-size: 0.9em;
      color: #666;
      margin-top: 5px;
    }
    .description, .category, .priority, .due-date {
      display: block;
      margin-right: 10px;
    }
    @media (max-width: 600px) {
      .details {
        flex-direction: column;
      }
    }
  `]
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<any>();
  @Output() toggleEvent = new EventEmitter<any>();

  onToggle() {
    this.toggleEvent.emit(this.task);
  }
}
