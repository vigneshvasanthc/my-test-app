import { Inject, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDoList } from './to-do-list.model';
import { HttpClient } from '@angular/common/http';

@Inject({})
export class ToDoService {
  private readonly api_url = 'https://jsonplaceholder.typicode.com/todos';

  private http = inject(HttpClient);

  getToDoList(pageIndex = 0, pageSize = 10): Observable<IToDoList[]> {
    const start = pageIndex * pageSize;
    return this.http.get<IToDoList[]>(
      `${this.api_url}?_start=${start}&_limit=${pageSize}`
    );
  }
}
