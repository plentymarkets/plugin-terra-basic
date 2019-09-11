import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BasicContactService } from './basic-contact.service';
import { ContactInterface } from './contact.interface';
import { TerraPagerInterface } from '@plentymarkets/terra-components';

@Component({
    selector: 'basic-contact',
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

    constructor(private basicContactService:BasicContactService)
    {
        this.contact = {
            firstName: '',
            lastName:  ''
        };

        this.stringEmitter.emit();
    }

    public ngOnInit():void
    {
        this.basicContactService.getContactById().subscribe((contacts:TerraPagerInterface<ContactInterface>) =>
        {
            contacts.entries.forEach((contact:ContactInterface) => {
                if(contact.lastName === 'Waits')
                {
                    //console.log(contact);
                    //console.log('_______________________');
                }
            });

            let contact:ContactInterface = contacts.entries.find((contact:ContactInterface) => {
                return contact.lastName === 'Waits';
            });

            //console.log('This should be Joseph');
            //console.log(contact);
            //console.log('_______________________');

            let contactsToBeEdited:Array<ContactInterface> = contacts.entries.filter((contact:ContactInterface) => {
               return contact.lastName != 'Waits';
            });

            //console.log('These Contacts shall be edited: ');
            //console.log( contactsToBeEdited);
            //console.log('_______________________');


            let changedArray:Array<ContactInterface> = contacts.entries.map((contact:ContactInterface) =>
            {
                if(contact.lastName === 'Waits')
                {
                    contact.lastName = 'Griesel';
                }
                return contact;
            });

            //console.log('These are the changed contacts');
            //console.log(changedArray);
            //console.log('_______________________');

            this.contactFunctionsObject(contact);
        });
    }

    private contactFunctionsObject(contact:Object)
    {
        // Object Keys
        Object.keys(contact).forEach((key:string) => {
            //console.warn(key);
            //console.warn(contact[key]);
        });

        // Object Values
        Object.values(contact).forEach((value:string) =>
        {
            //console.warn(value);
        });

        // Object entries
        let map:Map<string, string> = new Map(Object.entries(contact));

        //console.log(map.get('lastName'));
    }
}
