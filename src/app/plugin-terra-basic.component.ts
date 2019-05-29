import {
    Component,
    ViewEncapsulation,
    OnInit
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector:      'terra-basic-app',
    template:      require('./plugin-terra-basic.component.html'),
    styles:        [require('./plugin-terra-basic.component.scss')],
    encapsulation: ViewEncapsulation.None
})
export class PluginTerraBasicComponent implements OnInit
{
    private readonly domain:string = 'http://master.login.plentymarkets.com';
    /*tslint:disable-next-line:max-line-length*/
    private readonly accessToken:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA2MWM3NDA0YmZmMDlhZTNmMjkzNjFjOWIwZDJiNzNiY2FjYzkyZGFlODAxYjhmMTAyOTIyZGZlOGNlYjFiMTUzYmRkY2M1NjczMGVhYjMzIn0.eyJhdWQiOiIxIiwianRpIjoiMDYxYzc0MDRiZmYwOWFlM2YyOTM2MWM5YjBkMmI3M2JjYWNjOTJkYWU4MDFiOGYxMDI5MjJkZmU4Y2ViMWIxNTNiZGRjYzU2NzMwZWFiMzMiLCJpYXQiOjE1NTkxMTU1NDAsIm5iZiI6MTU1OTExNTU0MCwiZXhwIjoxNTU5MjAxOTQwLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.KpBODDe-ZbDxOUSujxkRK1iUHDvt7mQKPkZyX7cxvQ93Oaf6HN5UXQKmYPP9WQpOZOYoNJzsIyaWcPzcU0-YRcT4QOaFm6OSpA4DepscW7XK3zy0AVMm0IpUJVHDa6bcRSKl9TramsfpLfDmbkkeLuMvnYtJKnpC7z3GEPmzVfDXwYJ3kwt2kd4mMyX90cWBe2uBWs5SaLofreU6AMQ2KBQ6maEq0CxSxJXjfZoLXt_lM2KcJiwpmBxWV9MX8FLEUuyFwx1O6isIDFsC2JfkW54IICeQgKCyON4wdMkB-z9XilRqICTrQCQFITwnNzkUJBYPqMQou_fwxSL8hmJ1Gi6N8ezxfctNZEn-FSk02vbXNP8m3YrGpJxV7KcpU99QEF6ZygKxDFLRvSI_4SF_nxYzsuiq1E1x8cw1gMuo5NoCeEqZPg_vTdcgcARPOnZcB-Z5Lz1h-iywPxBYm2-6qd1jvaEP9AtaeOOVbn2NmlbKsJGJwDdXlQ05vW35smS4jSff9xBTKhyPfLDMhWJEGlRNbkXo9efP19cZ2LoBawiW6IdJbpp6WXIGqmJcofPZ8c8mUWY2Dh85sbkMXNy0hb4JvtUrjMMaJ5QuAJt-qs5mYEy4h8XBAL2rjKpQsQ8G2J2b8pSL_bfocqV5Bc9l92aTKu0Afeug_uvi6BlgcY8';

    constructor(private httpClient:HttpClient)
    {}

    public ngOnInit():void
    {
        if(process.env.ENV === 'development')
        {
            // store accessToken in localStorage since it is taken from there to be added to the Authorization header of any request
            localStorage.setItem('accessToken', this.accessToken);
        }

        let httpHeader:HttpHeaders = new HttpHeaders();
        httpHeader.append('Access-Control-Allow-Origin', 'http://master.login.plentymarkets.com');

        this.httpClient.get(`${this.domain}/rest/items`, {headers:httpHeader}).subscribe(console.log);
    }
}
