import { SortTableComponent } from '../../components/sort-table/sort-table.component';
import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { nameNumberKidary, mTask, nnk_geo } from '../../models/allmods';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { ConversionUtils } from 'turbocommons-ts';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-topBads',
  templateUrl: './topBads.component.html',
  styleUrls: ['./topBads.component.css']
})

export class TopBadsComponent {
  opts: Array<mTask>;
  infos: nnk_geo[] = [];

  destroyed = new Subject<void>();
  currentScreenSize!: string;


  infos2: nameNumberKidary[] = [];
  totalCrimes = 0;
  numbers: number[];

  port = '443';
  daturl = //'https://localhost:'
    'https://162.221.218.75:'
    + this.port + '/';

  balls = 'api/balls/';
  dicks = 'api/dicks/';
  mode = "over"
  hasBackdrop = true;

  codec = new HttpUrlEncodingCodec;


  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    breakpointObserver: BreakpointObserver,
    public _liveannouncer: LiveAnnouncer,
    private http: HttpClient, private _location: Location) {

    this.kid2Data = [];

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
    console.log("i am at home");
    this.numbers = new Array();
    this.opts = new Array<mTask>();

  }
  tooltipVariable1 = "Select All";
  tooltipVariable2 = "Select None";

  toggleselectAll(opt: any) {
    opt.options.forEach((o: { checked: boolean; }) => { o.checked = true });

  }
  toggleselectNone(opt: any) {
    opt.options.forEach((o: { checked: boolean; }) => { o.checked = false });

  }

  text = "";
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  ngOnInit(): void {
    this.http.get<nnk_geo[]>(this.daturl + 'api/TopBads')
      .subscribe((data: nnk_geo[]) => {
        this.kidData = data;
        this.infos = data;
      });
  }

  ngEncode(param: string) {
    return ConversionUtils.stringToBase64(param)
  }


  showAll = false;
  showUrDick2(inurl: string, parm: string) {

    parm = this.ngEncode(parm);
    this.http.get<nameNumberKidary[]>(this.daturl + this.dicks + parm)
      .subscribe((data2: nameNumberKidary[]) => {
        this.kid2Data = data2

      });
    console.log('I but trying it');

  }


  showUrl2(inurl: string, parm: string) {

    parm = this.ngEncode(parm);
    this.http.get<nnk_geo[]>(this.daturl + inurl + parm)
      .subscribe((data: nnk_geo[]) => {
        this.kidData = data;
        this.infos = data;
        this.countCrimes();
      });
    console.log('I but trying it');

  }


  theSelect = "" + null;
  selectType() {

    if (this.crime != null) {
      if (this.crime != null) {
      }
    }
  }


  AfterViewInit(): void {
    // this.dataSource.sort=this.sort1;
    //this.dataSource2.sort=this.sort2;

  }
  kid2Data: any[];
  kidData: nnk_geo[] | undefined
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
    if (rslt.length > 0) {
      if (rslt[0].kids != null)
        this.kid2Data = rslt[0].kids;
    }
    this.crime = cr;

  }
  unselectType() {
    this.crime = null;

  }
  countCrimes() {
    this.totalCrimes = 0;
    this.infos.forEach(e => {
      // debugger;
      this.totalCrimes += e.count;

    });

  }
}
