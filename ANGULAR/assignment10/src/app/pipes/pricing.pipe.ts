import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricing'
})
export class PricingPipe implements PipeTransform {

  transform(product: any, min: any,max:any): any {
    return product.filter(
        (x:any)=>(x.price)>=min && (x.price)<=max
    )
  }

}
