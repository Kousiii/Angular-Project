import {Component,Input} from '@angular/core';
@Component({
  selector: 'app-pagelast',
  templateUrl: './pagelast.component.html',
  styleUrls: ['./pagelast.component.css']
})
export class PagelastComponent {
  
  @Input() names:string=""
  @Input() icon:string=""
  @Input() para:string=""
  

}