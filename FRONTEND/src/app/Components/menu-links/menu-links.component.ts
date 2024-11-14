import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


import { PoButtonModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu-links',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    RouterLink,

    PoButtonModule
  ],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent {
  

}

