import { Component, OnInit } from '@angular/core';
import { AddTaskService } from './add-task.sevice';
import { MyTask } from './myTask';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [AddTaskService]
})

export class AddTaskComponent implements OnInit {
  myTask: MyTask[] = [];

  constructor(public addTaskService: AddTaskService) {
  }

  ngOnInit() {}


}
