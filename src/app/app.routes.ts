import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TopNavBar } from './top-nav-bar/top-nav-bar';
import { UserForm } from './user-form/user-form';
import { ToDoList } from './to-do-list/to-do-list';
import { Login } from './login/login';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'home', redirectTo: '', component: Home },
  { path: 'top-nav-bar', component: TopNavBar },
  { path: 'user-form', component: UserForm },
  { path: 'to-do-list', component: ToDoList },
  { path: 'login', component: Login },
  { path: '**', component: PageNotFound },
];
