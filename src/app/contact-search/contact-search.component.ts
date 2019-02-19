import { Component } from '@angular/core';
import { BasicContactService } from '../contact/basic-contact.service';
import {
    FormControl,
    FormGroup
} from '@angular/forms';

@Component({
    selector:    'terra-contact-search',
    templateUrl: './contact-search.component.html',
    styleUrls:   ['./contact-search.component.scss']
})
export class ContactSearchComponent
{

    private form:FormGroup;

    constructor(private contactService:BasicContactService)
    {
        this.form = new FormGroup({
            name: new FormControl('')
        });
    }
}
