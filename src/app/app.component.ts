import { Component, HostListener, NgZone, Renderer, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isPageScrolled = false;
  @ViewChild('spinnerElement') spinnerElement: ElementRef;

  routerSubscription: Subscription;
  
  constructor(
    private router: Router,
    private ngZone:NgZone,
    private renderer:Renderer) {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
            this.ngZone.runOutsideAngular(() => {
              setTimeout(()=> {
                this.renderer.setElementStyle(
                  this.spinnerElement.nativeElement,
                  'display',
                  'block'
                )
              },500);
          });
          break;
        }
        case event instanceof NavigationEnd:{
          this.hideSpinner();
          break;
        }
        case event instanceof NavigationCancel:{
          this.hideSpinner();
          break;
        }
        case event instanceof NavigationError: {
          this.hideSpinner();
          break;
        }
        default: {
          this.hideSpinner();
          break;
        }
      }
    });
  }

  private hideSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(()=> {
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'display',
          'none'
        )
      },500);
    })
  }

  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
    if(window.scrollY > 300)
      this.isPageScrolled = true;
    else
      this.isPageScrolled = false;
  }

  onTop(){
    window.scroll(0,0);
  }

  ngOnDestroy(){
    this.routerSubscription.unsubscribe()
  }
}
