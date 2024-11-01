import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'title text';
  students: Array<any> = [{}, {}];
  age: any = [];
  
  constructor() {
    console.log("in Constructor !!!! ");
    this.title = 'new title';
  }

  ngOnInit() {
    console.log("I am in ngOnInit !!!!<<<<<<< ")
  }

  ngOnDestroy() {
    console.log("I am Leaving the component;");
  }


}
