import { Component } from '@angular/core';
import { PoLoadingModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-registration-completed',
  standalone: true,
  imports: [
      PoLoadingModule
    ],
  templateUrl: './registration-completed.component.html',
  styleUrl: './registration-completed.component.css'
})
export class RegistrationCompletedComponent {

}
