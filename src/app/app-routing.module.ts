import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FolderCheckComponent } from './folder-check/folder-check.component'
import { ArchvjobCheckComponent } from './archvjob-check/archvjob-check.component'
import { ErrbatchMonitorComponent } from './errbatch-monitor/errbatch-monitor.component'
import { UrlCheckComponent } from './url-check/url-check.component'
import { DbjobCheckComponent } from './dbjob-check/dbjob-check.component'

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'details/101', component: FolderCheckComponent },
  { path: 'details/102', component: ArchvjobCheckComponent },
  { path: 'details/103', component: ErrbatchMonitorComponent },
  { path: 'details/104', component: UrlCheckComponent },
  { path: 'details/105', component: DbjobCheckComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}