import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  requestCallBackNumber1 = environment.requestCallBackNO1;
  requestCallBackNumber2 = environment.requestCallBackNO2;

  isNavbarCollapsed = true;
  isScrollDown = false;
  prevScrollpos = 0;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
                                                            .pipe(
                                                                map(result => result.matches)
                                                            );
  appRoutes = [{name:'Home',path:'home'},
                {name:'About Us',path:'aboutus'},
                {name:'Products', path:'products'},
                {name:'Services',path:'services'},
                {name:'Contact Us',path:'contactus'}
              ];
  @ViewChild('drawer') drawerRef: ElementRef;
  @ViewChild('topNav') topNav: ElementRef;
  @ViewChild('mainNav') mainNav: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      if(window.pageYOffset == 0){
        this.isScrollDown = false;
      }
      else{
        this.isScrollDown = true;
      }
      this.prevScrollpos = window.pageYOffset;
    }
}