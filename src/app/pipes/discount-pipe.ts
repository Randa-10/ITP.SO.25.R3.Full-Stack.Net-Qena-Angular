import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, disc:number): number {
    let discount=disc/100
    let val=value*discount
    let AfterDis=value-val
    return AfterDis;
  }

}
