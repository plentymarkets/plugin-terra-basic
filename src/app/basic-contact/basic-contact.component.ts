import {
    Component,
    OnInit
} from "@angular/core";
import { BasicContactService } from './basic-contact.service';

@Component({
        selector: 'basic-contact',
        template: require('./basic-contact.component.html'),
        styles: [require('./basic-contact.component.scss')]
    })
export class BasicContactComponent implements OnInit
{
    constructor(private basicContactService:BasicContactService)
    {

    }

    public ngOnInit():void
    {
        this.basicContactService.getContacts().subscribe((result:any) =>
        {
          console.log(result);
        })
    }
}
