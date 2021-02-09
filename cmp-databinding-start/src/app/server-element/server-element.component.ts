import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called')
   }
   
   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called');
     console.log(changes);
    }
    
    ngOnInit(): void {
      console.log('ngOnInit called');
    }
    
    ngDoCheck() {
      console.log('ngDocheck called')
    }
    
    ngAfterContentInit() {
      console.log('ngAfterContentInit called')
      console.log(`TextContent of paragraph: ${this.paragraph.nativeElement.textContent}`)
    }
    
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called')
    }
    
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called')
    }
    
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit called')
      console.log(`Text content: ${this.header.nativeElement.textContent}`);
    }
  
    ngOnDestroy(): void {
      console.log('ngOnDestroy called');
    }
    
  }
  