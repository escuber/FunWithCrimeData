import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ByTypeComponent } from './views/by-type/by-type.component';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import {  MapviewComponent } from './views/mapview/mapview.component';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import{ TopBadsComponent} from './views/topBads/topBads.component'
import {MapTableComponent} from './components/map-table/map-table.component';


import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'
import {LayoutModule} from '@angular/cdk/layout';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LameHomeComponent } from './views/lame-home/lame-home.component';
@NgModule({
  declarations: [
    AppComponent,
    ByTypeComponent,
    SortTableComponent,
    NavMenuComponent,
    MapviewComponent,
    FirstComponent,
    SecondComponent,
    TopBadsComponent,
    MapTableComponent,
    LameHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,GoogleMapsModule,

    [MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatCardModule, MatIconModule,MatChipsModule,
      MatSortModule, MatFormFieldModule,ScrollingModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatListModule,
      MatTableModule,LayoutModule,MatMenuModule,MatSelectModule, MatTreeModule, MatSlideToggleModule, MatGridListModule,MatTooltipModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
