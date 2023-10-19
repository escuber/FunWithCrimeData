import { SortTableComponent } from '../../components/sort-table/sort-table.component';

import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
///import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { nameNumberKidary, mTask } from '../../models/allmods';
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

import { MatChip } from '@angular/material/chips';



@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})

export class ByTypeComponent {
  opts: Array<mTask>;
  infos: nameNumberKidary[] = [];

  destroyed = new Subject<void>();
  currentScreenSize!: string;


  infos2: nameNumberKidary[] = [];
  totalCrimes = 0;
  numbers: number[];

  port = '443';
  daturl = //'https://localhost:'
    'https://162.221.218.75:'
    + this.port + '/';

  balls = 'api/crimes/';
  dicks = 'api/dicks/';
  mode="over"
  hasBackdrop=true;

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
    private http: HttpClient, private _location: Location)
    {

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

    var mt: mTask = {
      name: 'Eyes',
      checked: false,
      svrName: 'eyes',
      options: [
        { name: 'GREEN', checked: true, svrName: 'G' },
        { name: 'HAZEL', checked: true, svrName: 'H' },
        { name: 'BROWN', checked: true, svrName: 'BR' },
        { name: 'MULTI', checked: true, svrName: 'M' },
        { name: 'BLACK', checked: true, svrName: 'BLA' },
        { name: 'BLUE ', checked: true, svrName: 'BLU' },

      ],
    };
    this.opts.push(mt);
    var mt: mTask = {
      name: 'Race',
      checked: false,
      svrName: 'race',
      options: [
        { name: 'White', checked: true, svrName: 'W' },
        { name: 'Black', checked: true, svrName: 'B' },
        { name: 'Asian', checked: true, svrName: 'A' },
        { name: 'Unknown', checked: true, svrName: 'U' },
        { name: 'Indian', checked: true, svrName: 'I' },

      ],
    };
    this.opts.push(mt);


    var mt: mTask = {
      name: 'Sex',
      checked: false,
      svrName: 'sex',
      options: [
        { name: 'Male', checked: true, svrName: 'M' },
        { name: 'FEMALE', checked: true, svrName: 'F' }
      ],
    };

    this.opts.push(mt);
    // var mt: mTask = {
    //   name: 'Hair',
    //   checked: false,
    //   svrName: 'hair',
    //   options: [
    //     { name: 'GRAY', checked: false, svrName: 'GRA' },
    //     { name: 'PINK', checked: false, svrName: 'P' },
    //     { name: 'WHIT', checked: false, svrName: 'W' },
    //     { name: 'GREE', checked: false, svrName: 'GRE' },
    //     { name: 'SAND', checked: false, svrName: 'S' },
    //     { name: 'RED',  checked: false, svrName: 'R' },
    //     { name: 'BALD', checked: false, svrName: 'BA' },
    //     { name: 'BLON', checked: false, svrName: 'BLO' },
    //     { name: 'BROW', checked: false, svrName: 'BR' },
    //     { name: 'BLAC', checked: false,svrName: 'BLA' },
    //     { name: 'BLUE', checked: false,svrName: 'BLU' },
    //   ],
    // };
    // this.opts.push(mt);

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
    this.http.get<nameNumberKidary[]>(this.daturl + 'api/crimes')
      .subscribe((data: nameNumberKidary[]) => {
        this.kidData=data;
        this.infos = data;
        this.countCrimes();

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
        this.kid2Data=data2
      });
    console.log('I but trying it');

  }

  buildOptions() {

    var svrstr = "";
    var svrary = new Array()
    this.opts.forEach(el => {
      if (el.options) {
        var part = "("
        el.options.forEach(elopt => {
          if (elopt.checked) {
            part += el.svrName + ".SW(\"" + elopt.svrName + "\")||";

            // + "==\"" + elopt.svrName + "\"||";
          }
        });

        part = part.substring(0, part.length - 2) + "";
        if (part != "") {
          svrstr += part + ")&&";
        };
      }
    });

    svrstr = svrstr.substring(0, svrstr.length - 2);

    console.log("befpre spin" + svrstr)
    //// debugger;
    var addr = this.spinDry(svrstr);
    console.log("aftr spingspin" + svrstr)

    console.log("made " + svrstr);
    this.theSelect = "" + svrstr;
    if (this.crime != null) {
      svrstr += '&&severity=="' + this.crime + '"';
    }
    svrstr = svrstr.replaceAll('hair.SW(', '@h');
    svrstr = svrstr.replaceAll('eyes.SW(', '@e');
    svrstr = svrstr.replaceAll('race.SW(', '@r');
    this.theSelect = "" + svrstr;
    this.showUrl2('api/crimes/', svrstr);
    console.log(svrstr);
  }


  showUrl2(inurl: string, parm: string) {

    parm = this.ngEncode(parm);
    this.http.get<nameNumberKidary[]>(this.daturl + inurl + parm)
      .subscribe((data: nameNumberKidary[]) => {
       // console.log('you should have new');
        this.kidData=data;
        this.infos = data;
        this.countCrimes();
      });
    console.log('I but trying it');

  }


  spinDry(parms: string): string {
    while (parms.indexOf(' ') >= 0) {
      parms = parms.replace(' ', '');
    }
    while (parms.indexOf(' ') >= 0) {
      parms = parms.replace('%20', '');
    }
    return parms;
  }




  theSelect = "" + null;
  selectType() {

    if (this.crime != null) {
      if (this.crime != null) {
        if (this.theSelect.length <= 10)
          this.showUrDick2('api/dicks/', 'severity=="' + this.crime + '"');
        else
          this.showUrDick2('api/dicks/', this.theSelect + '&&severity=="' + this.crime + '"');
      }
    }
  }


  AfterViewInit(): void {
          // this.dataSource.sort=this.sort1;
           //this.dataSource2.sort=this.sort2;

          }



  kid2Data:nameNumberKidary[] | undefined;



  kidData:nameNumberKidary[] | undefined



  crime = null;
  setCrimeSelected(cr: any) {
    this.crime = cr;
    this.selectType()

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
