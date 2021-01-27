import { Component, Input, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/notice.model';

@Component({
  selector: 'app-notice-card',
  templateUrl: './notice-card.component.html',
  styleUrls: ['./notice-card.component.css']
})
export class NoticeCardComponent implements OnInit {

  @Input() notice: Notice;

  constructor() { }

  ngOnInit(): void {

    console.log(this.notice);
    
  }

}
