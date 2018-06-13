import { Injectable } from '@angular/core';
import {Archv} from './archv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchvService {

  private folderUrlImp = 'http://localhost:56111/api/archvJob/Import';
  private folderUrlXp = 'http://localhost:56111/api/archvJob/Xport';
  
  constructor(private http: HttpClient) { }
  
  getArchvsImp(): Observable<Archv[]> {
    return this.http.get<Archv[]>(this.folderUrlImp)
  }
  getArchvsXp(): Observable<Archv[]> {
    return this.http.get<Archv[]>(this.folderUrlXp)
  }
}
