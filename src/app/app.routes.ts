import { Routes } from '@angular/router';
import { TaskFormComponentComponent } from './pages/taskform/task-form-component.component';
import { TaskListComponentComponent } from './pages/tasklist/task-list-component.component';

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
