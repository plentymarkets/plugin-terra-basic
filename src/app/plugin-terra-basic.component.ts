import {
    Component,
    ViewEncapsulation,
    OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector:      'terra-basic-app',
    templateUrl:      './plugin-terra-basic.component.html',
    styleUrls:        ['./plugin-terra-basic.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PluginTerraBasicComponent implements OnInit
{
    private readonly domain:string = 'http://master.login.plentymarkets.com';
    /*tslint:disable-next-line:max-line-length*/
    private readonly accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1OTEwMjg4MDEwMjFlMGVjMjE0MDAxZDBhMWZkZTRlZmY1NWI1MzlkYjZiMTIyNDQ1ZmY1MDkxNGQzZWEzMjM5MWU1ZWQ5ZTk1ZDY5Mzc1In0.eyJhdWQiOiIxIiwianRpIjoiNDU5MTAyODgwMTAyMWUwZWMyMTQwMDFkMGExZmRlNGVmZjU1YjUzOWRiNmIxMjI0NDVmZjUwOTE0ZDNlYTMyMzkxZTVlZDllOTVkNjkzNzUiLCJpYXQiOjE1NTkwNTAyNTcsIm5iZiI6MTU1OTA1MDI1NywiZXhwIjoxNTU5MTM2NjU3LCJzdWIiOiIxMSIsInNjb3BlcyI6WyIqIl19.UqAcClGc-6q9aSb_mkX8kKlNaZa1ViNgJY_c5Nb0aAAsU16tcn0Om3n9HRKK0H8W1-9tUG1GEy95_0A0L8GXr0GLqFpwrWn-POi7i0JplYYGEN4Mrrwn0eMdpWd5tlrrJhfhjn5NxnFVWAnKqAVMgsxD7t2JnBUq9pUnNWMtqZFMIOxtEZWMJSG2kHh8MB_dofPiuv1oqELLItYKIZcLBKT67tyfWJcYuUIhWl15CXlfg6eb3oe3Vbwr7j1o4xiES6qOhvziA7XuBaeCe3NJGLtIK9_6lzp_8ib7tZRtdcux8kZM3pEesY885eh0OFDvK3xlJlajP4wvQUhENeI2QZYhrWq9NxfOX68cyMNEB8S1HqyJnX9rraVbYim7Iql0GhfAuLzMY72cJ3NFFcoi5oCw_MZRaEPmlDiCCobKBRzgi91BXFjtHdnXIf4sEL2wQxAuFTlCOiW36LqS6ZSVjirAneI7OcJShAZT5_lGsJdhHwzR23X_vsT8LdV8QmKxxCoBD1YB8IjooCaWxD7oJQ3WjAR7l8NOr9ff_d0n-foiDjIcCte-mpo3tOKMdICIx_K87xcJJlyQo-qrbiuxAsEGv5s8qAew0K3GZSdjcYnGnX43W_U-QQWMjASTC0WnKMFZi4AeulQ8LBrs48YKYtWSEVv8X7ASFTa-Pp5rCOc';

    constructor(private httpClient:HttpClient)
    {}

    public ngOnInit():void
    {
        if(process.env.ENV === 'development')
        {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }
        this.httpClient.get(`${this.domain}/rest/items`).subscribe(console.log);
    }
}
