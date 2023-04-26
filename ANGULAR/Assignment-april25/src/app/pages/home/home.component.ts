import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  min:number=0;
  max:number=60000;
  productlist:any;
      constructor(private ps:ProductService){
        this.ps.getOrder().subscribe(
          {
            next: (data:any)=> this.productlist =data,
            error: ()=> this.productlist=[]
          }
        )
      }
      options: string[]=[
        "All",
        "Electronics",
        "Cosmetics",
        "Groceries",
        "Books"
      ]
      type:string="All"

}