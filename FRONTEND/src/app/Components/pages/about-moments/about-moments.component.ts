import { Component } from '@angular/core';
import { PoContainerModule } from '@po-ui/ng-components';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-moments',
  standalone: true,
  imports: [PoContainerModule],
  templateUrl: './about-moments.component.html',
  styleUrl: './about-moments.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AboutMomentsComponent {

}
