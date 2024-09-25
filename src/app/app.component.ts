import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {TasksComponent} from "./tasks/tasks.component";
import {UserComponent,} from "./user/user.component";
import {DUMMY_USERS} from "./dummy.users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  users = DUMMY_USERS;
  selectUserId?: string;

  get getUserNameById() {
    const user = this.users.find((user) => user.id === this.selectUserId)!;
    console.log(user)
    return user;

  }

  OnSelectUser(id: string) {
    this.selectUserId = id;
  }
}
