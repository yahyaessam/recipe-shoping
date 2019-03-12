import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  countCompleted: boolean;
  countDown: number;
  count$: Observable<number>;
  message:string;
  otherCounter$: Observable<number>;
  otherCounDown: number;
  countEnded: boolean;
  globalURL: string;
  myName: string = "Yahya Essam";
  constructor(private mainService:MainService, private router:ActivatedRoute, private http: HttpClient){
    this.countDown = 5;
    this.message = "Happy birthday!"
    this.countCompleted = false;

    this.count$ = Observable
                    .interval(1000)
                    .map(i => this.countDown - i)
                    .takeWhile(i => i > 0)
                    .finally(() => this.countCompleted = true);
  }

  ngOnInit() {
    debugger;
    this.countEnded = false;
    this.otherCounDown = 10;
    this.otherCounter$ = Observable
                          .interval(1000)
                          .map(i => this.otherCounDown - i)
                          .takeWhile(i => i > 0)
                          .finally(() => this.countEnded = true);

                          
    this.globalURL = this.mainService.globalURL;
    this.mainService.logMyName(this.myName);
    this.mainService.onOtherService(this.message);
    // this.http.get('http://google.com').subscribe(res => console.log(res));
    
  }
  ngDoCheck() {
    console.log('something changed');
  }

  

}
