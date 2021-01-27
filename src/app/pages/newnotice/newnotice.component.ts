import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newnotice',
  templateUrl: './newnotice.component.html',
  styleUrls: ['./newnotice.component.css']
})
export class NewnoticeComponent implements OnInit {

  createPage: boolean

  constructor() {
    this.createPage = false;
   }

  ngOnInit(): void {
  }

}
