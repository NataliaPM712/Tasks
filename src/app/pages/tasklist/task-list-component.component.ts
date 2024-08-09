import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Taks } from './../../models/tasks.model';


@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent implements OnInit, OnDestroy {

  //tasks: {id: number, title: string, completed: boolean }[] = [];

  tasks = ([
    {
      id: Date.now(),
      title: 'Crear reseña',
      completed: true
    },
    {
      id: Date.now() +1,
      title: 'Escribir libro',
      completed: false
    }
  ]);

  taskCtrl = new FormControl('',{
    validators: [
      Validators.required
    ]
  });

  ngOnInit(): void {
    console.log('componente inicializado');

  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: true
    };
    this.tasks.push(newTask);
  }

  changeHandler(){
    if (this.taskCtrl.valid) {
      const value = this.taskCtrl.value;
      if (value !== '') {
        this.addTask(value);
        this.taskCtrl.setValue('';)
      }
    }
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  ngOnDestroy(): void {
    console.log('conmponente destruido');
  }
}


