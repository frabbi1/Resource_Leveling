import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ActivityGraphComponent} from './activity-graph/activity-graph.component';
import {AboutUsComponent} from "./about-us/about-us.component";
import {CpmGraphComponent} from "./activity-graph/cpm-graph/cpm-graph.component";
import {BurgessDiagramComponent} from "./activity-graph/burgess-diagram/burgess-diagram.component";
import {MinimizedGraphComponent} from "./activity-graph/minimized-graph/minimized-graph.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activity-graph', component: ActivityGraphComponent,
    children: [
      {path: 'cpm', component: CpmGraphComponent},
      {path: 'burgess', component: BurgessDiagramComponent},
      {path: 'minimized', component: MinimizedGraphComponent}
    ] },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
