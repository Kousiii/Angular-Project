import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComplaintService } from 'src/app/services/complaint.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit{
  
    fname:any;
    email:any;
    productname:any;
    message:any;
    errors:string[]=[];
    constructor(private hs:ComplaintService) { }
  
    // ngOnInit(): void {
    // }
  
    submit(){
      this.errors = []
  
      let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
      if(this.fname==undefined || this.fname.length<3)
        this.errors.push("First name should be greater than 3 characters")
      if(this.email==undefined || !expr.test(this.email))
        this.errors.push("Should be in email format")
      if(this.productname==undefined || this.productname.length<3)
        this.errors.push("Select from the list")
      if(this.message==undefined || this.message.length<30)
        this.errors.push("Message should be greater than 30 characters")
  
        if(this.errors.length==0){
          let obj={
            id:Math.round(Math.random()*100000),
            fname: this.fname,
            email: this.email,
            company: this.productname,
            message: this.message
  
          }
          this.hs.postEnquiry(obj).subscribe({
            next: ()=>{
              alert("You enquiry is posted")
              this.fname="",
              this.email="",
              this.productname="",
              this.message=""
              
            },
            error: ()=>alert("there is a problem posting your equiry")
          }
          )
        }
    }
    options:any=[
      "Air Conditioner",
      "Apple Iphone 13 Pro",
      "Eye Shadow",
      "Lipstick",
      "Origano",
      "Cheese Spread",
      "Smart Tv",
      "Mad About You-Perfume",
      "Maggie",
      "The Wings of Fire",
      "Airpods Pro",
      "Charlotte's Web"
      ];
      myControl = new FormControl();
      filteredOptions: Observable<string[]>=new Observable<string[]>();
      ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
      );
    }
    private _filter(value: string): string[] {
    if (!value) {
      return this.options;
    }
    const filterValue = value.toLowerCase();
    return this.options.filter((option:any) => option.toLowerCase().includes(filterValue));
      
     }
  }
  

