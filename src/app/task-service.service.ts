import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks : Task[];

  constructor() {
    this.tasks = [];
  }

  get Tasks(){
    return this.tasks;
  }

  addTask(task:Task){
    this.tasks.push(task);
  }

  getCompleteCount(){
    return this.tasks.filter(task => task.completed == true).length;
  }

  getIncompleteCount(){
    return this.tasks.filter(task => task.completed == false).length;
  }

  deleteTask(task : Task){
    let index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
  }
}
