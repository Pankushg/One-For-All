import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FolderCheckComponent } from './folder-check/folder-check.component'
const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: '101', component: FolderCheckComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}