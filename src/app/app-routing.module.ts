import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ActivityGraphComponent} from './activity-graph/activity-graph.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activity-graph', component: ActivityGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
