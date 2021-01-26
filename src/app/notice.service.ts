import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Notice } from './models/notice.model';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  baseUrl: string = 'https://olinda-tech.top/angular-teste/noticia/listar';

  constructor(private http: HttpClient) { }


  listAll():Observable<Notice[]> {
    return this.http.get<Notice[]>(this.baseUrl).pipe(
      map(obj => obj)
      // tratar possivel error aqui!
    )
  }





}
