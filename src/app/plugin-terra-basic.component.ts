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
    private readonly domain:string = 'http://master.login.plentymarkets.com';
    /*tslint:disable-next-line:max-line-length*/
    private readonly accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMThmZmViMDIxMWI0MGRjZThlNjEwYTE2OWJiZjMyYmZjZWVjZWVmMWJlOTI3ZGY0MWVkNDQ2MjFhNjQwYzlkZDA2YTgxOGM2YWNjNTc2NGQiLCJpYXQiOjE1OTI0NTk4NDcsIm5iZiI6MTU5MjQ1OTg0NywiZXhwIjoxNTkyNTQ2MjQ3LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.qDvrMDq9vT2b68V5LwzO2dVC-cknsF9prG5v2a43N7fw5tzmB-XCxh28Z_oaiGI932X8fhQQaw-WuW3YsBAE63qB0zWDcKjKHjCb8TkXiYNwiMC2KNp5PNxoOaHaeG02lhT5n9XJU_zGIf5VALe5ewvM-V05ddBn8RB_BLYt3PNqQnlHBLe2pyVJHH251fjLUxNS4APu9pGQZDMRofhjEnvy0HcyaOHyPlXN9HH3o4kpfsKOHUncVPzBzgdNG6HJ-s8b5t0nXcHL-y2Lvd-zJHP61tHUFREbtkIc4RHCefk_vblRecrsG8I314r0oNxfwhSy2Uvnjj0y4vvZOwsrnjq6-BqdFMqSAQHlZpP-dhwyf1vcdv1QPM-AufxSrq1TXyo-N8G4G2IIA3RvYId4mLRrTAryPGgNuQg_1p0gfhFIORMspOulLlTlHu67dnJZOEhUs30J5TvyA1RAJKUMCzGuKmn5G1yxFTVb0v0dvEZpWl7JRajvNCLLdvxO4PVyXzLY-PjfTeH9KdV600VVvn4XrxWXgEY50jtL-s3Fm-9rgVrCjLVNExBOrwBAZd3RRSZXvDRjVyvm8BTmKVo8Nzo_4edLPYnmYi-HcaLDpmol4GA_p3_0kyM2SsNb0q909bPb9phptnfhDbDGd7elZtdzFDOm5wo5WYWbi5iSeOg';
    constructor(private httpClient:HttpClient)
    {
    }

    public ngOnInit():void
    {
        if(!environment.production)
        {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }
        // this.httpClient.get(`${this.domain}/rest/items`).subscribe(console.log);
    }
}
