import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { FolderCheckComponent } from './folder-check/folder-check.component';
import { AppRoutingModule } from './app-routing.module';
import { ArchvjobCheckComponent } from './archvjob-check/archvjob-check.component';
import { ErrbatchMonitorComponent } from './errbatch-monitor/errbatch-monitor.component';
import { UrlCheckComponent } from './url-check/url-check.component';
import { DbjobCheckComponent } from './dbjob-check/dbjob-check.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FolderCheckComponent,
    ArchvjobCheckComponent,
    ErrbatchMonitorComponent,
    UrlCheckComponent,
    DbjobCheckComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
