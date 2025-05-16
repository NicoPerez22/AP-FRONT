import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-control-board',
  imports: [
    SpinnerComponent,
    RouterOutlet,
    SideNavComponent,
    HeaderNavComponent,
  ],
  templateUrl: './control-board.component.html',
  styleUrl: './control-board.component.scss',
})
export class ControlBoardComponent {}
