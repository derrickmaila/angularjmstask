import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

const httpOptions  = {

  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:8080/api/tasks")
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>("http://localhost:8080/api/task", task,httpOptions)
  }

}

