import {
    Component,
    Input,
    EventEmitter,
    Output,
    OnInit
} from '@angular/core';
import { BasicContactService } from './basic-contact.service';
import { ContactInterface } from './contact.interface';

@Component({
    selector: 'basic-contact',
    template: require('./basic-contact.component.html'),
    styles:   [require('./basic-contact.component.scss')]
})
export class BasicContactComponent implements OnInit
{
    @Input()
    private newText:string = 'blablabla';

    private booleanProperty:boolean = false;

    private serviceText:string = '';

    private contact:ContactInterface;

    constructor(private basicContactService:BasicContactService)
    {
        this.contact = {
            firstName: '',
            lastName:  '',
            rating:    0
        };

        this.serviceText = basicContactService.getText();
    }

    @Output()
    private stringEmitter:EventEmitter<string> = new EventEmitter<string>();

    private handleButton():void
    {
        this.stringEmitter.emit('Button has been clicked');

        let newCount:number = this.basicContactService.getCounter() + 1;
        console.log('new Count ' + newCount + ' set');
        this.basicContactService.setCounter(newCount);
    }

    public ngOnInit():void
    {
        this.basicContactService.getContactById(102).subscribe(
            (contact:ContactInterface) =>
            {
                this.contact.firstName = contact.firstName;
                this.contact.lastName = contact.lastName;
                this.contact.rating = contact.rating;
            });
    }
}
