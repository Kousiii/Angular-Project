import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() content:string=""
  @Input() servicelist:string[]=[]
}

/*
<app-about [content]="x" [servicelist]="y"><app-about>
*/
