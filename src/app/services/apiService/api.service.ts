import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import GenericType from 'src/app/interfaces/generic.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T extends GenericType> {
  private apiUrl = "http://localhost:5000";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`);
  }

  getOne(endpoint: string, objectId: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${objectId}`);
  }

  add(endpoint: string, object: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, {...object, id: uuid()}, this.httpOptions);
  }

  update(endpoint: string, object: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${object.id}`, object, this.httpOptions);
  }
}
