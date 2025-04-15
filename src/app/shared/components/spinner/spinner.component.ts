import { Component, inject } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  protected readonly spinner = inject(SpinnerService);
}
