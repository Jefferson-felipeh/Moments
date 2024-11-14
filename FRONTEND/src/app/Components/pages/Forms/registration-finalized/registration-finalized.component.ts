import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PoButtonModule } from '@po-ui/ng-components';
import { ViewEncapsulation } from '@angular/core';
import { PoIconModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-registration-finalized',
  standalone: true,
  imports: [RouterLink,PoButtonModule, PoIconModule],
  templateUrl: './registration-finalized.component.html',
  styleUrl: './registration-finalized.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFinalizedComponent {

}
