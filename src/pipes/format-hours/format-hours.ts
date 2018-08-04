import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatHoursPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatHours',
})
export class FormatHoursPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.split(' ')[1];
  }
}
