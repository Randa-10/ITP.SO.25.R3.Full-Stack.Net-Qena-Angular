import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  viewChild,
} from '@angular/core';

//class
//meta
@Directive({
  selector: '[appImgStyle]',
})
export class ImgStyle implements OnInit, OnChanges {
  //property decorator
  @Input() color1: string = 'red';
  constructor(public ele: ElementRef) {
    //document.getElementByID
    //1
    //life cycle components
    // this.ele.nativeElement.style.border = `solid 2px ${this.color1}`;
    console.log('constructor');
  }
  ngOnChanges(): void {
    // console.log("ngOnChanges");
    //1
    this.ele.nativeElement.style.border = `solid 2px ${this.color1}`;
  }
  ngOnInit(): void {
    console.log('ngOnInit');

    // this.ele.nativeElement.style.border = `solid 2px ${this.color1}`;
  }
  //method decorator
  @HostListener('mouseover') mouseover() {
    this.ele.nativeElement.style.border = `solid 4px blue`;
  }

  @HostListener('mouseout') mouseout() {
    this.ele.nativeElement.style.border = `solid 2px ${this.color1}`;
 
  }
}
