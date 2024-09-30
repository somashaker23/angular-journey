import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<{ title: string; summary: string; date: string }>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  OnCancel() {
    this.cancel.emit()
  }

  OnSubmit() {
    this.addTask.emit({
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      }
    )
  }
}
