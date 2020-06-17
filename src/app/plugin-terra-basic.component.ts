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
    private readonly accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2OGU1MDYzZjFhZjA5MWZiODA1YWZlYjM4Yzk4MGQzZTQ1M2FmOTU1M2VjYWExMzNkYzM0NmZhNDVlZWVhNjk2NTA0NGY1ODdiNWI4ODQ1In0.eyJhdWQiOiIxIiwianRpIjoiMTY4ZTUwNjNmMWFmMDkxZmI4MDVhZmViMzhjOTgwZDNlNDUzYWY5NTUzZWNhYTEzM2RjMzQ2ZmE0NWVlZWE2OTY1MDQ0ZjU4N2I1Yjg4NDUiLCJpYXQiOjE1OTIzNzc2MTAsIm5iZiI6MTU5MjM3NzYxMCwiZXhwIjoxNTkyNDY0MDEwLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.YXEBM-TV77F3Lq49ElEnD7i8zztBeMEhKoUTxXujhv4huUxIsXQIVRf0g-ZsJaqqYvnOxao2WLq2D117sPb397-sXLDCUFGjWq-_TJGGOo9dp1Q45WlMy0eMirbkp7En3yC2_UUaaI9jYQujNxLU66VJ-Fc8pMP5AesuLtxo-GPGS5nhG1yFBwdMWXQPgjnW6gWEjtLKhQkF-oaLkH3wTVmgBD0__t9lbjnaz3hn6yYIJtg8H3hp1E5SYabmJvWSOngORibDfSj5cumzB_r0RfLneZV0zDZrAU_hCS8B0csK_-b0-YFUHPXYX8QLUd3FDske9Kn99afeBnJIM5TATu-Gf1HSNFR2M8kHw18PyHOgrr5w4oQVG0JOX1k_z9QuWZA2POlCBJjvbUuygknXXA2QPKk1epZTqv0-guEdMJXn_6AlYOJEnc4FaZEKVaqxitE6Zb3SiiMCV8pPgx4qLKg4tDK24mgacl6tJlohKBJqXArxSs4r6IXHLJBjXoNU8cq--6nggjwThH13sxI-a3EzZi4lRiCsVR4OOXEbvpSag-sSYz1c8xJh7b1DPlK49-y1mXgSTrGPOfkAqtLLJkYpIDXON2wgtgyP0jKPUab3P6-NFn6_sUQXF3cXw3hYVzDXyVbxPjz7kXyd5mUERqONPOa4bjUb1brf8biRxW8';
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
        this.httpClient.get(`${this.domain}/rest/items`).subscribe(console.log);
    }
}
