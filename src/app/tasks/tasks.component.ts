import {Component, Input} from "@angular/core";
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [TaskComponent],
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input('name') name!: string;

}
