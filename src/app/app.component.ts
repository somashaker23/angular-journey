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
  selectName!: string;

  users = DUMMY_USERS;


  OnSelectUser(id: string) {
    this.selectName = this.getUserNameById(id);
  }

  private getUserNameById(id: string) {
    const user = DUMMY_USERS.find(user => user.id === id);
    return user ? user.name : "Hey!";

  }
}
