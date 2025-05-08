import { Component } from '@angular/core';
import { ControlBoardComponent } from '../control-board/control-board.component';

@Component({
  selector: 'app-dashboard',
  imports: [ControlBoardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {}
