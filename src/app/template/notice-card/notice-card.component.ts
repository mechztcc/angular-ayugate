import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from 'src/app/notice.service';
import { Component, Input, OnInit } from '@angular/core';


import { Notice } from 'src/app/models/notice.model';

@Component({
  selector: 'app-notice-card',
  templateUrl: './notice-card.component.html',
  styleUrls: ['./notice-card.component.css']
})
export class NoticeCardComponent implements OnInit {

  @Input() notice: Notice;



  constructor(private noticeService: NoticeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


    
  }

  deleteNotice(): void {
    this.noticeService.delete(this.notice.id).subscribe(() => {
      this.reload();
    })
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }

}
