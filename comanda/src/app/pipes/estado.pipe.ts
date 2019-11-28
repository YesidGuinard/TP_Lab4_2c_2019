import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  constructor(){}

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return value; 
    const resultadoEstado = [];
    for(const pedido of value){
      if(pedido.estado.toLowerCase().indexOf(arg) > -1){
         resultadoEstado.push(pedido);
      };
    };
    return resultadoEstado;
  }
}