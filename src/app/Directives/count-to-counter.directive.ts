import { Directive, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { interval } from 'rxjs';

@Directive({
  selector: '[appCountToCounter]'
})
export class CountToCounterDirective implements OnInit {
  @Input('toValue') toValue:number;
  @Output('onCount') onCount:EventEmitter<number> = new EventEmitter<number>();
  isShown:boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit(){
 
  }

  @HostListener('window:scroll', ['$event']) checkElementVisible(){

    var top =this.el.nativeElement.offsetTop;  
    var parentElement = this.el.nativeElement.offsetParent;

    while(parentElement) {
      top += parentElement.offsetTop;
      parentElement = parentElement.offsetParent;
    }

    if(window.innerHeight >= (top - window.scrollY) && !this.isShown)
    {
      this.isShown = true;
        const mynumbers = interval(50);
        mynumbers.subscribe(
        n =>{ 
          if(n > this.toValue)
            return;
          this.onCount.emit(n);
        }
      );
    }
  }
}
