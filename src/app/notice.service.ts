import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Notice } from './models/notice.model';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  baseUrl: string = 'https://olinda-tech.top/angular-teste/noticia';
  

  constructor(private http: HttpClient) { }


  listAll():Observable<Notice[]> {
    return this.http.get<Notice[]>(`${this.baseUrl}/listar`).pipe(
      map(obj => obj)
      // tratar possivel error aqui!
    )
  }

  create(notice: Notice): Observable<Notice> {
    return this.http.post<Notice>(`${this.baseUrl}/cadastro/novo`, notice)
  }

  delete(id: number): Observable<Notice> {
    return this.http.delete<Notice>(`${this.baseUrl}/excluir/${id}`)
  }

  readById(id: number): Observable<Notice> {
    return this.http.get<Notice>(`${this.baseUrl}/listar/${id}`)
  }

  update(notice: Notice): Observable<Notice> {
    return this.http.put<Notice>(`${this.baseUrl}/alterar`, notice);
  }

}
