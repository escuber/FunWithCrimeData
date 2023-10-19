import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
//import { GoogleMap } from '@angular/google-maps';
import { Injectable } from '@angular/core';

import { SortTableComponent } from '../../components/sort-table/sort-table.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
///import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { nameNumberKidary, mTask,nnk_geo } from '../../models/allmods';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ConversionUtils } from 'turbocommons-ts';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

import { MatChip } from '@angular/material/chips';



//import { } from '@types/googlemaps';
declare let google: any;
declare let map: any;

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit, AfterViewInit {

  @ViewChild('myGoogleMap', { static: true }) map!: GoogleMap;

  infos: nnk_geo[] = [];
  destroyed = new Subject<void>();
  currentScreenSize!: string;
  infos2: nameNumberKidary[] = [];
  totalCrimes = 0;

  showList=false;
  port = '443';
  daturl = 'https://localhost:'
  //'https://162.221.218.75:'
  + this.port + '/';


  balls = 'api/balls/';
  dicks = 'api/dicks/';
  mode="over"
  hasBackdrop=true;
  codec = new HttpUrlEncodingCodec;
  kidData:nnk_geo[] | undefined

  markers: any[] = [
  // { position: { lat: 46.03782650000001, lng: -99.37211699999999 }}, // Cathédrale Notre-Dame de Paris
  ];
  display:any;
  center:google.maps.LatLngLiteral={lat:38.28651858854262,lng:-96.8876747009647};
  zoom=5;
  labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  labelIndex = 0;
  badGuy = { lat: 46.03782650000001, lng: -99.37211699999999 };


  constructor(
    breakpointObserver: BreakpointObserver,
    public _liveannouncer: LiveAnnouncer,
    private http: HttpClient, private _location: Location)
    {

      this.markers=new Array();

    }
    ngOnInit(): void {


      //let newPos={ position: { lat: 46.03782650000001, lng: -99.37211699999999}, label: "H",title:'My Ass is here'}
      //this.markers.push(newPos);

      this.http.get<nnk_geo[]>(this.daturl + 'api/TopBads')
        .subscribe((data: nnk_geo[]) => {
          this.kidData=data;
          this.infos = data;
          this.infos.forEach(el => {

            let lat:number=+el.lat;
            let lng:number=+el.lng;
            let newPos={ position: { lat: lat, lng: lng}, label: "H",title:el.name}
            this.markers.push(newPos);


          });

        });
    }
  ngAfterViewInit()
  {


  }

mapOptions: google.maps.MapOptions = {
  center:{lat:38.28651858854262,lng:-96.8876747009647},
  zoom: 5,
};



// Adds a marker to the map.
 addMarker(location: google.maps.LatLngLiteral,map:any) {
  //let map= google.maps.Map;
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker=  new google.maps.Marker({
    position: location,
    label: this.labels[this.labelIndex++ % this.labels.length],
    map:map,
  });
  marker.addListener('click',function(){
    alert('marker was clicked');
  });
  this.markers.push(marker);

}

markerClick(event:any){

  debugger;
  alert('marker was clicked');
//  map = new google.maps.Map(document.getElementById('map'));
 // this.addMarker(this.badGuy,map);
  //debugger;
  // if(event.latLng!=null)
  // {
  // this.center=(event.latLng?.toJSON());
  // this.display=event.latLng.toJSON();
  // }


}
  moveMap(event: google.maps.MapMouseEvent){

    debugger;
    map = new google.maps.Map(document.getElementById('map'));
    this.addMarker(this.badGuy,map);
    //debugger;
    if(event.latLng!=null)
    {
    this.center=(event.latLng?.toJSON());
    this.display=event.latLng.toJSON();
    }

  }
  move(event: google.maps.MapMouseEvent){
    debugger;
    if(event.latLng!=null)
    this.display=event.latLng.toJSON();


  }
  crime = null;
  setCrimeSelected(cr: any) {
    //  debugger;
    let rslt = this.infos.filter(
      function (el, i, arr) {
        if (el.name == cr) {
          return true;
        }
        return false;
      });
    //if (rslt.length > 0) {
      //if (rslt[0].kids != null)
        //this.kid2Data = rslt[0].kids;
    //}
    this.crime = cr;

  }
  unselectType() {
    this.crime = null;

  }


}
