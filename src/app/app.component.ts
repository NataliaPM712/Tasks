import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';

import { TaskFormComponentComponent } from './pages/taskform/task-form-component.component';
import { TaskListComponentComponent } from './pages/tasklist/task-list-component.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: '',
    component: TaskListComponentComponent
  },
  {
    path: 'form',
    component: TaskFormComponentComponent
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskFormComponentComponent, TaskListComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasks';
}
