import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NoticeService } from 'src/app/notice.service';
import { Notice } from 'src/app/models/notice.model';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.css']
})
export class EditNoticeComponent implements OnInit {

  form: FormGroup;


  notice: Notice = {
    id: 0,
    titulo: '',
    descricao: '',
    autor: '',
    status: 0
  }

  constructor(private fb: FormBuilder, private noticeService: NoticeService, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      titulo: ['', Validators.compose([
        Validators.required, Validators.minLength(3),Validators.maxLength(22)
      ])],
      descricao: ['', Validators.compose([
        Validators.required, Validators.minLength(10),Validators.maxLength(100)
      ])],
      autor: ['', Validators.compose([
        Validators.required, Validators.maxLength(8)
      ])],
      status: ['']
    })
   }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.noticeService.readById(id).subscribe((notice) => {
      this.notice = notice;
    }); 
  }

  updateNotice(): void {
    this.notice.titulo = this.form.controls['titulo'].value;
    this.notice.descricao = this.form.controls['descricao'].value;
    this.notice.autor = this.form.controls['autor'].value;
    this.notice.status = this.form.controls['status'].value === true ? 1 : 0;
    this.noticeService.update(this.notice).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
