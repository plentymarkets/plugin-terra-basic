import {
    Component,
    OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
    selector:    'ptb-app',
    templateUrl: './plugin-terra-basic.component.html',
    styleUrls:   ['./plugin-terra-basic.component.scss'],
})
export class PluginTerraBasicComponent implements OnInit
{
    /*tslint:disable-next-line:max-line-length*/
    private readonly accessToken:string = '';

    public ngOnInit():void
    {
        if(!environment.production)
        {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }
    }
}
