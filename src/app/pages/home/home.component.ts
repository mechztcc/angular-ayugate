import { Notice } from './../../models/notice.model';
import { Component, OnInit } from '@angular/core';

import { NoticeService } from './../../notice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [1,2,3];

  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.listAll().subscribe((notices)=> {
      this.notices = notices;

      
    })
  }

}
