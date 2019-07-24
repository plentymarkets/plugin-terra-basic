import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { ContactInterface } from './contact.interface';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'ptb-basic-contact',
    templateUrl: './basic-contact.component.html',
    styleUrls:   ['./basic-contact.component.scss']
})
export class BasicContactComponent implements OnInit
{
    @Output()
    public stringEmitter:EventEmitter<string> = new EventEmitter<string>();

    private pageText:string;

    private contact:any;

    @Input()
    public set pageTextValue(pageText:string)
    {
        this.pageText = pageText;
        this.stringEmitter.emit(pageText);
    }

    constructor(private contactService:ContactService)
    {
        this.contact = {
            firstName: '',
            lastName:  ''
        };

        this.stringEmitter.emit();
    }

    public ngOnInit():void
    {
        this.contactService.getContactById(102).subscribe((contact:ContactInterface) =>
        {
            this.contact.firstName = contact.firstName;
            this.contact.lastName = contact.lastName;

            console.log(contact);
        });
    }
}
