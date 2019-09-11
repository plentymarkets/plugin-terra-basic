import {
    Component,
    OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
    selector:      'ptb-app',
    templateUrl:   './plugin-terra-basic.component.html',
    styleUrls:     ['./plugin-terra-basic.component.scss'],
})
export class PluginTerraBasicComponent
{
    private parentText:string;

    constructor()
    {
        this.parentText = 'Input test';
    }
    private toggleText():void
    {
        if(this.parentText === '')
        {
            this.parentText = 'Input test';
        }
        else
        {
            this.parentText = '';
        }
    }

    private handleString(stringParam:string):void
    {
        console.log(stringParam);
    }
}
