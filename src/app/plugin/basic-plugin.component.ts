import {
    OnInit,
    Component
} from '@angular/core';
import { BasicContactService } from '../contact/basic-contact.service';

@Component({
    selector: 'basic-plugin',
    template: require('./basic-plugin.component.html'),
    styles:   [require('./basic-plugin.component.scss')]
})
export class BasicPluginComponent implements OnInit
{
    constructor(private basicContactService:BasicContactService)
    {
    }

    public ngOnInit():void
    {
        console.log(this.basicContactService.getCounter());
    }

    private handleButton():void
    {
        console.log(this.basicContactService.getCounter());
    }
}
