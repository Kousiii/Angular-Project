import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  reviewForm:any;
  types:string[]=["Electronics","Cosmetics","Books","Groceries"]
         constructor(private fb:FormBuilder,private fs:ReviewService){
         this.reviewForm = this.fb.group({
            type:['Electronics'],
            name:['',[Validators.required,Validators.minLength(3)]],
            message:['',[Validators.required,Validators.minLength(15)]],

          });
         }
  
         saveReview(){ 
          var temp:any={
            id: Math.round(Math.random()*10000),
            type:this.reviewForm.value.type,
            name: this.reviewForm.value.name,
            message:this.reviewForm.value.message
          
          }
          this.fs.postReviews(temp).subscribe(
           { 
            next: data=>{
              alert('Your Reviews are saved. Thank Youuu!')
              location.reload();
            },
            error:(error)=>alert('Not saved ---some Error')
          }
      
          )
      
        }
}
