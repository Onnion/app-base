import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormaPricePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {


  format (value: string) {
    let result: string = 'R$';
    let parts = value.split('.');
    
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return result.concat(' ', parts.join(','));
  }

  transform(value: string, ...args) {

    if (!value) return value;

    return this.format(value);
  }
}
