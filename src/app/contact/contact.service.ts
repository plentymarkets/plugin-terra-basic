import { Injectable } from '@angular/core';
import { ContactInterface } from './contact.component';

@Injectable({
    providedIn: 'root'
})
export class ContactService
{
    public contact:ContactInterface = {
        id:        1,
        firstName: 'Pascal',
        lastName:  'Weyrich'
    };

    constructor()
    {
    }
}
