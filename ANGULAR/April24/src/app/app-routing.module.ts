import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"complaint", component: ComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








