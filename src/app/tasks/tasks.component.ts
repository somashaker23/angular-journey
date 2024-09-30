import {Component, Input} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [TaskComponent, NewTaskComponent],
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id!: string
  @Input({required: true}) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  OnStartAddTask() {
    this.isAddingTask = true
  }

  OnCancelAddTask() {
    this.isAddingTask = false;
  }

  onTaskAdd(NewTask: { title: string; summary: string; date: string }) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: NewTask.title,
      summary: NewTask.summary,
      dueDate: NewTask.date,
    })
    this.isAddingTask = false;
  }
}
