import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { IToDoList } from './to-do-list.model';
import { ToDoService } from './to-do-list.service';
import { catchError, combineLatest, finalize, of, timer } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  imports: [
    NgClass,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [ToDoService],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
})
export class ToDoList implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;
  isError = false;
  totalItems = 200;

  userListData: string[] = ['id', 'title', 'completed'];
  todos: IToDoList[] = [];

  private toDoService = inject(ToDoService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.isLoading = false;
      }
    });

    this.loadTodos(0, 10);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.paginator.page.subscribe((event) => {
        this.loadTodos(event.pageIndex, event.pageSize);
      });
    });
  }

  loadTodos(pageIndex: number, pageSize: number): void {
    this.isLoading = true;
    this.isError = false;

    const api$ = this.toDoService.getToDoList(pageIndex, pageSize).pipe(
      catchError(() => {
        this.isError = true;
        return of([]);
      })
    );

    combineLatest([api$, timer(500)])
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe(([data]) => {
        this.todos = data;
      });
  }
}
