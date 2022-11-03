
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'DefaultValue'})
export class DefaultValuePipe implements PipeTransform {

  transform(value: any): string {
    if(0== value)
    {
      console.log("HIT HERE - IF");
      return "";
    }
    else
    {
      console.log("HIT HERE - ELSE");
      return String(value);
    }
  }
}