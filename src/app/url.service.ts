import { Injectable } from '@angular/core';
import { Url } from './url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private urlInfoUrl = 'http://localhost:56111/api/url';  
  constructor(private http: HttpClient) { }

  getUrlInfo () : Observable<Url[]>{
    return this.http.get<Url[]>(this.urlInfoUrl);    
  }
}
