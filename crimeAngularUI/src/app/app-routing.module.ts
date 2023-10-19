import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByTypeComponent } from './views/by-type/by-type.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent} from './app.component';
import{ TopBadsComponent} from './views/topBads/topBads.component'
import { LameHomeComponent } from './views/lame-home/lame-home.component';


import {  MapviewComponent } from './views/mapview/mapview.component';
const routes: Routes = [
  {path:'topBads', component:TopBadsComponent},
  {path:'bytype', component:ByTypeComponent},
  {path:'mapView', component:MapviewComponent},
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'index.html', component: LameHomeComponent},
  { path: '', redirectTo: 'index.html', pathMatch: 'full' },
  { path: '**', redirectTo: 'index.html', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
