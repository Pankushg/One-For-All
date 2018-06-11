import { Component, OnInit } from '@angular/core';
import { Url } from '../url';
import { UrlService } from '../url.service'

@Component({
  selector: 'app-url-check',
  templateUrl: './url-check.component.html',
  styleUrls: ['./url-check.component.css']
})
export class UrlCheckComponent implements OnInit {

  urls : Url[];

  constructor(private urlService : UrlService) { }

  ngOnInit() {
    this.getUrlInfo();
  }

  getUrlInfo(){
    return this.urlService.getUrlInfo()
      .subscribe(url => this.urls = url);
  }

}
