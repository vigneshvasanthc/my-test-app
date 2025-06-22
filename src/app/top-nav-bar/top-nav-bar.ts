import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
@Component({
  selector: 'app-top-nav-bar',
  imports: [MatButtonModule, MatMenuModule, RouterLink, RouterLinkActive],
  templateUrl: './top-nav-bar.html',
  styleUrl: './top-nav-bar.scss',
})
export class TopNavBar {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
