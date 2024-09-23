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
  selectId = 'u1'

  OnSelectUser(id: string) {
    this.selectId = id;
  }

  get getUserNameById() {
    const user = DUMMY_USERS.find(user => user.id === this.selectId);
    console.log(user)
    return user ? user.name : "Hey!";

  }
}
