import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasksUrl = 'http://10.23.16.88:17051/api/task';
  constructor(private http: HttpClient) { }

    getTasks (): Observable<Task[]> {
      return this.http.get<Task[]>(this.tasksUrl)
    }
}
