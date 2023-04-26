import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { CardItemsComponent } from './pages/home/card-items/card-items.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { PricingPipe } from './pipes/pricing.pipe';
import { CardDetailsComponent } from './pages/home/card-details/card-details.component';
import { ReviewFormComponent } from './pages/home/card-details/review-form/review-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ComplaintComponent,
    CardItemsComponent,
    FilterPipe,
    PricingPipe,
    CardDetailsComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
