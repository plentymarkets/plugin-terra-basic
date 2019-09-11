import {
    Component,
    Input,
    EventEmitter,
    Output,
    OnInit
} from '@angular/core';
import { BasicContactService } from './basic-contact.service';

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
        this.basicContactService.getContactById()

    }
}
