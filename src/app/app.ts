import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopNavBar } from './top-nav-bar/top-nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-test-app';
  constructor(private router: Router) {}
  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
