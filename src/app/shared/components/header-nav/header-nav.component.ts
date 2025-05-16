import { Component, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SideNavService } from '../side-nav/services/side-nav.service';

@Component({
  selector: 'app-header-nav',
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  protected sidenavService = inject(SideNavService);
  protected showToggle = false;

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
  }

  toggleCollapsed(): void {
    this.sidenavService.toggleCollapsed();
  }

  private onResize(): void {
    const width = window.innerWidth;
    const threshold = 768;
    this.showToggle = width <= threshold;
    if (width <= threshold && !this.sidenavService.$$isCollapsed()) {
      this.sidenavService.toggleCollapsed();
    }
    if (width > threshold && this.sidenavService.$$isCollapsed()) {
      this.sidenavService.toggleCollapsed();
    }
  }
}
