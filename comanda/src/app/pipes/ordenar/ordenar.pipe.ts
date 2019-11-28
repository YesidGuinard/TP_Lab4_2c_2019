import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore'; 

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: any): any {
    if(!value) return [];
    return _.sortBy(value, function(producto: any){ return producto.nombre })
  }

}
