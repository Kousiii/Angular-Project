import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './menu/cards/cards.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PricingPipe } from './pipes/pricing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsComponent,
    FilterPipe,
    PricingPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
