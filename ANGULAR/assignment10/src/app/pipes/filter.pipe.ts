import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productlist: any, type: string): any {
    
    if(type=="All"){
      return productlist;
    }
    

    return productlist.filter((x:any)=>x.type==type)
  }

}


