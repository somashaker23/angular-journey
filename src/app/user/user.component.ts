import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;
  @Output() select = new EventEmitter()

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }

  OnSelectUser() {
    this.select.emit(this.id);
  }
}
