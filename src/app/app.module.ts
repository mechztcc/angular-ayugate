import { NoticeService } from './notice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { NoticeCardComponent } from './template/notice-card/notice-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NewnoticeComponent } from './pages/newnotice/newnotice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditNoticeComponent } from './pages/edit-notice/edit-notice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NoticeCardComponent,
    NewnoticeComponent,
    EditNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ NoticeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
