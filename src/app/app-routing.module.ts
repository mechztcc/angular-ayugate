import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoticeComponent } from './pages/edit-notice/edit-notice.component';
import { HomeComponent } from './pages/home/home.component';
import { NewnoticeComponent } from './pages/newnotice/newnotice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: NewnoticeComponent },
  { path: 'editar/:id', component: EditNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
