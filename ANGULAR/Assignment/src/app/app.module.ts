import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstblockComponent } from './firstblock/firstblock.component';
import { SliderComponent } from './slider/slider.component';
import { LastpartComponent } from './lastpart/lastpart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstblockComponent,
    SliderComponent,
    LastpartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
