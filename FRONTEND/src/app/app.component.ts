import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  showMenu: boolean = true;

  constructor(private route:Router){
    route.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
        const hiddenMenuRoutes = ['/login','/register'];        
        this.showMenu = !hiddenMenuRoutes.includes(e.url);
      }
    });
  }




}
