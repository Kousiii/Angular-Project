import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  id:any;
  details:any;
 constructor(private hs:ProductService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }

 readData(){

    this.hs.getDetailsById(this.id).subscribe({
        next: (data:any)=> this.details =data,
        error: ()=> this.details = {}
    })
    
 }

}
