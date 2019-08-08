import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output
} from "@angular/core";
import { BasicContactService } from './basic-contact.service';
import { BasicContactInterface } from './basic-contact.interface';

@Component({
        selector: 'basic-contact',
        template: require('./basic-contact.component.html'),
        styles: [require('./basic-contact.component.scss')]
    })
export class BasicContactComponent implements OnInit
{
    protected restContact:BasicContactInterface;

    protected class:string = 'test';

    protected nameArray:Array<string> = ['Joe', 'Jim', 'Jacob'];

    @Input()
    private contactJost:BasicContactInterface = {id:0, firstName: '', lastName:''};

    @Output()
    private contactJostChange:EventEmitter<BasicContactInterface> = new EventEmitter();

    constructor(private basicContactService:BasicContactService)
    {

    }

    public ngOnInit():void
    {
        this.basicContactService.getSingleContact(107).subscribe(
            (result:BasicContactInterface) =>
            {
                this.restContact = result;
                this.contactJostChange.emit(result);
            },
            (error:any) =>
            {
                console.warn(error);
            });
    }
}
