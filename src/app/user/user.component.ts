import {Component, computed, input} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input<string>("user-1.jpg");
  name = input.required<string>();
  imagePath = computed(() => '/assets/users/' + this.avatar())

  OnSelectUser() {
     alert("I am " + this.name());

  }
}
