import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css']
})
export class CardItemsComponent {
@Input() product:any;
}
