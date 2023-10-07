import { Component, EventEmitter, Input, Output } from '@angular/core';
import TaskUser from 'src/model/TaskUser';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})

export class TaskBoxComponent {

  @Input() task!: TaskUser;
  @Output() removeTaskUserEvent = new EventEmitter();
  @Output() editTaskUserEvent = new EventEmitter();

  removeTask() {
    this.removeTaskUserEvent.emit(this.task);
  }

  editTask() {
    console.log(this.task);
    this.editTaskUserEvent.emit(this.task);
  }
}