import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-control-board',
  imports: [SpinnerComponent, RouterOutlet],
  templateUrl: './control-board.component.html',
  styleUrl: './control-board.component.scss',
})
export class ControlBoardComponent {}
