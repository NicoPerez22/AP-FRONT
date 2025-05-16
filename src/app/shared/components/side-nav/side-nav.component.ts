import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
@Component({
  selector: 'app-side-nav',
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
