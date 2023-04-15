import { Component } from '@angular/core';
import {ProductName} from './appdata/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ClassAssignment';
  producttitle=ProductName
  names:string[]=["SEO","BRANDING","LOGO"]
 // icon=["http://localhost/seo.png","http://localhost/brand.png","http://localhost/logo.png"]
  description:string[]=
  [
    ProductName.seoPara,
    ProductName.brandingPara,
    ProductName.logoPara
  ]
}

