import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormRegisterCenterComponent } from './Components/pages/Forms/form-register-center/form-register-center.component';
import { MenuLinksComponent } from './Components/menu-links/menu-links.component';
import { FormRegisterComponent } from './Components/pages/Forms/form-register/form-register.component';

import { PoButtonModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';

import {PoMenuItem,PoMenuModule,PoPageModule,PoToolbarModule} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormRegisterCenterComponent,
    MenuLinksComponent,
    FormRegisterComponent,

    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    PoToolbarModule,
    PoModalModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  menuItemSelected!: string;

  // readonly menu: Array<PoMenuItem> = [
  //   {label: 'Início', icon: 'ph ph-user'},
  //   {label: 'Sobre',icon: 'ph ph-arrow-circle-right'},
  //   {label: 'Contato', icon:'ph ph-phone-outgoing'},
  //   {
  //     label: 'Login',
  //     subItems: [
  //       {
  //         label: 'Entrar',
  //         shortLabel: 'Login',
  //         action: () => this.onClick.bind(this),
  //         link: '/login'
  //       },
  //       {
  //         label: 'Cadastrar',
  //         shortLabel: 'LogUp',
  //         action: () => this.onClick.bind(this),
  //         link: '/register'
  //       }
  //     ]
  //   }
  // ];

  // private onClick(menu: PoMenuItem) {
  //   this.menuItemSelected = menu.label;
  // }

//----------------------------------------------------------------------------

readonly menus: Array<PoMenuItem> = [
  { 
    label: 'Início', 
    action: this.printMenuAction.bind(this), 
    icon: 'ph ph-user', 
    shortLabel: 'Home' 
  },
  {
    label: 'Sobre',
    action: this.printMenuAction.bind(this),
    icon: 'ph ph-clock',
    shortLabel: 'About',
    badge: { value: 1 }
  },
  {
    label: 'Contato',
    icon: 'ph ph-share',
    shortLabel: 'Links',
    subItems: [
      { 
        label: 'Ministry of Labour', 
        action: this.printMenuAction.bind(this), 
        link: 'http://trabalho.gov.br/' 
      },
      { 
        label: 'SindPD Syndicate', 
        action: this.printMenuAction.bind(this), 
        link: 'http://www.sindpd.com.br/' 
      }
    ]
  },
  {
    label: 'Benefits',
    icon: 'ph ph-star',
    shortLabel: 'Benefits',
    subItems: [
      {
        label: 'Meal tickets',
        subItems: [
          { label: 'Acceptance network ', action: this.printMenuAction.bind(this) },
          {
            label: 'Extracts',
            action: this.printMenuAction.bind(this),
            subItems: [
              { label: 'Monthly', action: this.printMenuAction.bind(this), badge: { value: 3, color: 'color-03' } },
              { label: 'Custom', action: this.printMenuAction.bind(this) }
            ]
          }
        ]
      },
      { label: 'Transportation tickets', action: this.printMenuAction.bind(this), badge: { value: 12 } }
    ]
  }
];

// constructor(public samplePoMenuHumanResourcesService: SamplePoMenuHumanResourcesService) {}

printMenuAction(menu: PoMenuItem) {
  this.menuItemSelected = menu.label;
}

}
