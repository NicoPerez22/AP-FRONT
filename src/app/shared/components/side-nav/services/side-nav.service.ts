import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  $$isCollapsed = signal<boolean>(false);

  toggleCollapsed(): void {
    this.$$isCollapsed.set(!this.$$isCollapsed());
  }
}
