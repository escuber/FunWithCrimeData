import {  SimpleChanges, OnChanges, } from '@angular/core';
import { Component, Input, ViewChild, OnInit, AfterViewInit,Output, EventEmitter } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
///import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { nameNumber } from './../../models/charges';
import { nameNumberKidary, mTask , nnk_geo} from './../../models/allmods';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpUrlEncodingCodec } from '@angular/common/http';
//import { ConversionUtils } from 'turbocommons-ts';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { GoogleMap } from '@angular/google-maps';
import { Injectable } from '@angular/core';
//import { } from '@types/googlemaps';
declare let google: any;
declare let map: any;


@Component({
  selector: 'app-map-table',
  templateUrl: './map-table.component.html',
  styleUrls: ['./map-table.component.css']
})
export class MapTableComponent  implements OnInit, AfterViewInit  {
  @Input() item:nnk_geo[] | undefined;
  //[{"id":0,"name":"misdemeanor","count":1779,"kids":[]},{"id":0,"name":"felony","count":671,"kids":[]},{"id":0,"name":"unknown","count":250,"kids":[]},{"id":0,"name":"other","count":236,"kids":[]},{"id":0,"name":"traffic","count":50,"kids":[]},{"id":0,"name":"non criminal","count":48,"kids":[]},{"id":0,"name":"offence","count":21,"kids":[]},{"id":0,"name":"Infractio","count":16,"kids":[]},{"id":0,"name":"Inchoat","count":1,"kids":[]}]

  @ViewChild('myGoogleMap', { static: true }) map!: GoogleMap;

  constructor() { }

  ngOnInit() {
//debugger;


  }
  ngAfterViewInit()
  {


  }

mapOptions: google.maps.MapOptions = {
  center:{lat:38.28651858854262,lng:-96.8876747009647},
  zoom: 5,
};

markers: any[] = [
  { position: { lat: 46.03782650000001, lng: -99.37211699999999 }}, // Cathédrale Notre-Dame de Paris
];
  display:any;
  center:google.maps.LatLngLiteral={lat:38.28651858854262,lng:-96.8876747009647};
  zoom=5;
   labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  labelIndex = 0;
  badGuy = { lat: 46.03782650000001, lng: -99.37211699999999 };



// Adds a marker to the map.
 addMarker(location: google.maps.LatLngLiteral,map:any) {
  //let map= google.maps.Map;
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: this.labels[this.labelIndex++ % this.labels.length],
    map:map,
  });
}

  moveMap(event: google.maps.MapMouseEvent){

    debugger;
    map = new google.maps.Map(document.getElementById('map'));
    this.addMarker(this.badGuy,map);
    debugger;
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



}
