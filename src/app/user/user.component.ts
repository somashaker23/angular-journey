import {Component, EventEmitter, Input, Output} from "@angular/core";
import {type User} from "./user.model";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter()


  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  OnSelectUser() {
    this.select.emit(this.user.id);
  }
}
