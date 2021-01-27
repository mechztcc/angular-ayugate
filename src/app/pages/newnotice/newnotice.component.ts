import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;

  notice: Notice = {
    titulo: '',
    descricao: '',
    autor: '',
    status: 0

  }

  constructor(private noticeService: NoticeService, private router: Router, private fb: FormBuilder) {
    this.createPage = false;

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', Validators.compose([
        Validators.required, Validators.minLength(3),Validators.maxLength(22)
      ])],
      descricao: ['', Validators.compose([
        Validators.required, Validators.minLength(10),Validators.maxLength(100)
      ])],
      autor: ['', Validators.compose([
        Validators.required, Validators.maxLength(15)
      ])],
      status: ['']
    })
  }

  createNotice(): void {

    this.noticeService.create(this.notice).subscribe(() => {
      console.log(this.notice.status);
      
      this.router.navigate(['/'])
    })
    
  }

  saveNotice() {
    this.notice.titulo = this.form.controls['titulo'].value;
    this.notice.descricao = this.form.controls['descricao'].value;
    this.notice.autor = this.form.controls['autor'].value;
    this.notice.status = this.form.controls['status'].value === true ? 1 : 0;
    
    this.noticeService.create(this.notice).subscribe(() => {
      this.router.navigate(['/'])
    })

    // console.log(this.notice.status);
    // this.notice.status = this.form.controls['status'].value;
    // console.log(this.notice);
    
  }

}
