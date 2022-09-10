import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  order = 1;
  onConstructorValue = 1;
  ngOnChangesValue = 1;
  ngOnInitVlaue = 1;
  ngDoCheckValue = 1;
  ngAfterContentInitValue =1;
  ngAfterContentCheckedValue = 1;
  ngAfterViewInitValue =1;
  ngAfterViewCheckedVlaue=1;
  ngOnDestroyValue = 1;


  constructor() {
    console.log('I am from constructor()!! and my order::::' + this.order);
    this.order++;
    this.onConstructorValue =this.order
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('I am from ngOnChanges()!! and my order::::' + this.order);
    this.order++;
    this.ngOnChangesValue = this.order;
  }

  ngOnInit() {
    console.log('I am from ngOnInit() and my order::::' + this.order);
    this.order++;
    this.ngOnInitVlaue = this.order;
  }

  ngDoCheck() {
    console.log('I am from ngDoCheck() and my order::::' + this.order);
    this.order++;
    this.ngDoCheckValue= this.order
  }

  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
    this.ngAfterContentInitValue = this.order
  }

  ngAfterContentChecked() {
    console.log(
      'I am from ngAfterContentChecked() and my order::::' + this.order
    );
    this.order++;
    this.ngAfterContentCheckedValue = this.order
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
    this.ngAfterViewInitValue = this.order
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
    this.ngAfterViewCheckedVlaue = this.order
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;
    this.ngOnDestroyValue = this.order
  }
}
