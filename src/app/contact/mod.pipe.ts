import { Pipe, PipeTransform } from '@angular/core';
import { ContactInterface } from './contact.component';

@Pipe({
  name: 'mod',
  pure: false
})
export class ModPipe implements PipeTransform {

  public transform(contact:ContactInterface, args?:any):any
  {
    return contact.id % args;
  }

}
