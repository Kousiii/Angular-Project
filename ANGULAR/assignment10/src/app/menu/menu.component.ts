import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
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
