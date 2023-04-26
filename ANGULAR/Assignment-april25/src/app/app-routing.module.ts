import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { CardDetailsComponent } from './pages/home/card-details/card-details.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"complaint", component: ComplaintComponent},
  {path:"products/:id", component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








