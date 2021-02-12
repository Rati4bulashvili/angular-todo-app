
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Task } from '../../task';
import { TaskServiceService } from '../../task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public taskService:TaskServiceService) {}

  ngOnInit(): void {
  }
  
  task1: Task;
  id = 0;
  name: string;
  
  assignName(newTask){
    this.name = newTask.name;
  }
  
  addTask(newTask){
    this.assignName(newTask);
    this.task1 = new Task(this.id, this.name, false);
    console.log(this.task1)
    this.taskService.addTask(this.task1);
    this.id++;
  }

  check(e){
    if(e.target.checked){
      this.taskService.Tasks[e.target.id].completed = true;
    }
    else{
      this.taskService.Tasks[e.target.id].completed = false;
    }
  }
  
  get tasks(){
    return this.taskService.Tasks;
  }

  deleteTask(task){
    this.taskService.deleteTask(task);
  }
}
