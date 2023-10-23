import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
  transform(value: number, integetDigits?: number, fractionDigints?: number): any {

    if (integetDigits !== undefined) {
      if (fractionDigints !== undefined) {
        return Math.sqrt(value).toLocaleString(undefined, {minimumIntegerDigits: integetDigits, maximumFractionDigits: fractionDigints, minimumFractionDigits: fractionDigints})
      } else {
        return Math.sqrt(value).toLocaleString(undefined, {minimumIntegerDigits: integetDigits})
      }
    }
    else {
        return Math.sqrt(value);
    }
  }
}