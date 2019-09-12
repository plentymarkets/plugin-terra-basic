import {
    Component,
    OnInit
} from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactInterface } from '../contact.component';

@Component({
    selector:    'ptb-contact-view',
    templateUrl: './contact-view.component.html',
    styleUrls:   ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit
{
    protected contact:ContactInterface;

    constructor(private contactService:ContactService)
    {
    }

    public ngOnInit():void
    {
        this.contact = this.contactService.contact;
    }

    public onButtonClick(event:MouseEvent):void
    {
        console.log(event);
    }
}
