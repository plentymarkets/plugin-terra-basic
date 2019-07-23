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
            // implement object functions here
        });
    }

    private objectFunctions(contact:ContactInterface)
    {

    }


}
