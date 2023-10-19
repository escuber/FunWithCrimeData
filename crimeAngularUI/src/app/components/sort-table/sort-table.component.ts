import {  SimpleChanges, OnChanges, } from '@angular/core';
import { Component, Input, ViewChild, OnInit, AfterViewInit,Output, EventEmitter } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
///import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { nameNumber } from './../../models/charges';
import { nameNumberKidary, mTask } from './../../models/allmods';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpUrlEncodingCodec } from '@angular/common/http';
//import { ConversionUtils } from 'turbocommons-ts';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.css']
})
export class SortTableComponent  implements OnInit, AfterViewInit  {
  @Input() item:nameNumberKidary[] | undefined;
  //[{"id":0,"name":"misdemeanor","count":1779,"kids":[]},{"id":0,"name":"felony","count":671,"kids":[]},{"id":0,"name":"unknown","count":250,"kids":[]},{"id":0,"name":"other","count":236,"kids":[]},{"id":0,"name":"traffic","count":50,"kids":[]},{"id":0,"name":"non criminal","count":48,"kids":[]},{"id":0,"name":"offence","count":21,"kids":[]},{"id":0,"name":"Infractio","count":16,"kids":[]},{"id":0,"name":"Inchoat","count":1,"kids":[]}]

  @Input() showFilter=true;


  //:nameNumberKidary[] | undefined ;

  @Output() selectedCrimeEvent = new EventEmitter<string>();

  @ViewChild('table1',{read :MatSort,static: true})  sort1!: MatSort;
  displayedColumns: string[] = ['name', 'count'];
  dataSource: any;;
  infos: nameNumberKidary[] = [];

  selectType(row: any) {

    this.selectedCrimeEvent.emit(row.name);
  }
  constructor(
    public _liveannouncer:LiveAnnouncer,
    private http: HttpClient, private _location: Location) {
    }

  ngOnInit(): void {

      //this.infos = this.item;
      this.dataSource = new MatTableDataSource(this.item);
      this.dataSource.sort=this.sort1;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ArraySize:"+this.item?.length);
    this.dataSource = new MatTableDataSource(this.item);
    this.dataSource.sort=this.sort1;

    console.log(changes);
}

  AfterViewInit(): void {
           this.dataSource.sort=this.sort1;

          }
  announceSortChange(sortState:Sort)
  {
    if(sortState.direction)
    {
      this._liveannouncer.announce('sorted $sorted $(sortState.direction}ending');

    }else{
      this._liveannouncer.announce('sorting cleared')

    }

  }
  text = "";
  applyFilter(x: any) {
    this.text += x.target.value + ' | ';
    this.dataSource.filter = x.target.value.trim().toLowerCase();


  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.matPaginator;

  }


}
