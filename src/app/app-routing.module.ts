import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CandyFormComponent } from './candy-form/candy-form.component';
import { CandyListComponent } from './candy-list/candy-list.component';

const routes: Routes = [
  { path: '', redirectTo:'/list', pathMatch: 'full'},
  { path: 'add', component: CandyFormComponent},
  { path: 'list', component: CandyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
