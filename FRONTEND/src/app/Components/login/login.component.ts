import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { api } from '../../service/api';
import { dataUser, User } from '../../interfaces/dataUser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  datasList:dataUser[] = [];
  emailExists!:boolean;

  datasUserForm:User = {
    email: ''
  }
  validation:boolean = false;

  ngOnInit(): void {}

  EventClickedBtn = async ($event:Event) => {
    $event.preventDefault();

    this.datasList = (await api.get('/listUsers')).data;
    
    for(let i:number = 0;i< this.datasList.length;i++) this.datasList[i].email.toLowerCase() == this.datasUserForm.email.toLowerCase() ? this.emailExists = true: this.emailExists == false;
   
  }
}
