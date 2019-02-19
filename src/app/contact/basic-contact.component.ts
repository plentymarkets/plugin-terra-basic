import {
    Component,
    Input,
    EventEmitter,
    Output,
    OnInit
} from '@angular/core';
import { BasicContactService } from './basic-contact.service';
import { ContactInterface } from './contact.interface';
import { TerraPagerInterface } from '@plentymarkets/terra-components';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'basic-contact',
    template: require('./basic-contact.component.html'),
    styles:   [require('./basic-contact.component.scss')]
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
            //console.log(contacts);

            contacts.entries.forEach((contact:ContactInterface) =>
            {
                if(contact.lastName === 'Griesel')
                {
                    //console.log(contact);
                    //console.log('_____________________');
                }
            });

            let contact:ContactInterface = contacts.entries.find((contactToFind:ContactInterface) =>
            {
                return contactToFind.lastName === 'Waits';
            });

            //console.log(contact);
            //console.log('_____________________');

            this.objectFunctions(contact);

            let contactsToBeEdited:ContactInterface = contacts.entries.filter((contactToFilter:ContactInterface) =>
            {
                return contactToFilter.firstName.startsWith('J');
            })


                                                              .filter((contactToFilterFilter:ContactInterface) =>
                                                              {
                                                                  return contactToFilterFilter.firstName.startsWith('Jo');
                                                              }).find((contactToFilterFilterFind:ContactInterface) =>
                {
                    return contactToFilterFilterFind.firstName === 'Joseph';
                });

            //console.log(contactsToBeEdited);
            //console.log('_____________________');

            let firstEntry:ContactInterface = contacts.entries[200];

            if(!isNullOrUndefined(firstEntry))
            {
                //console.log('Doch nicht');
            }

            console.log('This should be undefined');
            console.log(firstEntry);

            let changedContacts:Array<ContactInterface> = contacts.entries.map((mappedContact:ContactInterface) =>
            {
                if(mappedContact.firstName.startsWith('J'))
                {
                    mappedContact.lastName = 'Wieder';
                }

                return mappedContact;
            });

            //console.log('There should be some agains now');
            //console.log(changedContacts);

            const nonUniqueArray = ['foo', 'foo', 'bar'];

            //console.log(nonUniqueArray);

            //console.log(nonUniqueArray.filter((entry:string, index:number, selfArray:Array<string>) => {
            //    return selfArray.indexOf(entry) === index;
            //}));

            const numbers: Array<number> = [1, 2, 3, 4, 5];

            // console.log(numbers);

        });
    }

    private objectFunctions(contact:ContactInterface)
    {
        Object.keys(contact).forEach((key:string) =>
        {
            //console.log(key);
        });

        Object.values(contact).forEach((value:any) =>
        {
            //console.log(value);
        });

        let contactMap:Map<string, string > = new Map(Object.entries(contact));

        //console.log(contactMap.get('lastName'));
        console.log(contactMap);
    }


}
