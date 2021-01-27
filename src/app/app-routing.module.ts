import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewnoticeComponent } from './pages/newnotice/newnotice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: NewnoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
