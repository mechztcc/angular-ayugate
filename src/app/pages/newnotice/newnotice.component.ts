import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Notice } from 'src/app/models/notice.model';
import { NoticeService } from 'src/app/notice.service';

@Component({
  selector: 'app-newnotice',
  templateUrl: './newnotice.component.html',
  styleUrls: ['./newnotice.component.css']
})
export class NewnoticeComponent implements OnInit {

  createPage: boolean

  notice: Notice = {
    titulo: '',
    descricao: '',
    autor: '',
    status: 0

  }

  constructor(private noticeService: NoticeService, private router: Router) {
    this.createPage = false;
   }

  ngOnInit(): void {
  }

  createNotice(notice: Notice): void {

    this.noticeService.create(this.notice).subscribe(() => {
      this.router.navigate(['/'])
    })
    
  }

}
