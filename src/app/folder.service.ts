import { Injectable } from '@angular/core';
import {Folder} from './folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private folderUrl = 'http://localhost:56111/api/folder';
  constructor(private http: HttpClient) { }
  
  getFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.folderUrl)
  }
}
