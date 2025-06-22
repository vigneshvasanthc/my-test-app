import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TopNavBar } from './top-nav-bar/top-nav-bar';
import { UserForm } from './user-form/user-form';
import { ToDoList } from './to-do-list/to-do-list';
import { Login } from './login/login';
import { PageNotFound } from './page-not-found/page-not-found';
import { LoginAuthGuard } from './login/login-auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [LoginAuthGuard] },
  { path: 'user-form', component: UserForm, canActivate: [LoginAuthGuard] },
  { path: 'to-do-list', component: ToDoList, canActivate: [LoginAuthGuard] },
  { path: 'top-nav-bar', component: TopNavBar, canActivate: [LoginAuthGuard] },
  { path: 'login', component: Login },
  { path: '**', component: PageNotFound },
];
