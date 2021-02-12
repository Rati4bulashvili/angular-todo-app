
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/task-service.service';


@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {}

  completed: number; 
  incomplete: number;

  checkCompleted(){
    this.completed = this.taskService.getCompleteCount();
    this.incomplete = this.taskService.getIncompleteCount();
  }

  getCompleteCount(){
    this.checkCompleted();
  }
  
  getIncompleteCount(){
    this.checkCompleted();
  }



}
