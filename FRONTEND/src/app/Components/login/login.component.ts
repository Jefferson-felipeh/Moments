import { Component } from '@angular/core';
import { api } from '../../service/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  EventClickedBtn = async (e:Event) => {
    e.preventDefault();
  }
}
