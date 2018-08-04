import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormaNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatName',
})
export class FormatNamePipe implements PipeTransform {


  format(value: string) {
    const values = value.split(' ');
    let result: string = '';

    const firstInitial  = values[0].charAt(0).toUpperCase();
    const firstName     = values[0].substr(1).toLowerCase()
    
    result = result.concat(firstInitial.concat('', firstName));

    if ( values.length > 1 ){
      const secondInitial = values[1].charAt(0).toUpperCase();
      const secondName    = values[1].substr(1).toLowerCase()

      result = result.concat(' ', secondInitial.concat('', secondName));
    }

    return result;

  }


  transform(value: string, ...args) {

    if (!value) return value;

    return this.format(value);

  }
}
