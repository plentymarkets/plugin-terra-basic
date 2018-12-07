import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
    TerraBaseService,
    TerraLoadingSpinnerService,
    TerraPagerInterface
} from '@plentymarkets/terra-components';
import { tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { of } from 'rxjs/observable/of';
import { UserInterface } from './user.interface';

/**
 * @author mscharf
 */
@Injectable()
export class UsersService extends TerraBaseService
{
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5MDYxMTgzMjVhZjVlY2NmMGEzNTI2MzRhYmY5Y2ZiZWNkZWZkZWY3YjcxODhlZWMxNDc0NGIxMWI5NTUzNDc0N2MwNjRlZmE0ODY0NTFjIn0.eyJhdWQiOiIxIiwianRpIjoiMTkwNjExODMyNWFmNWVjY2YwYTM1MjYzNGFiZjljZmJlY2RlZmRlZjdiNzE4OGVlYzE0NzQ0YjExYjk1NTM0NzQ3YzA2NGVmYTQ4NjQ1MWMiLCJpYXQiOjE1NDQxOTQ0MjQsIm5iZiI6MTU0NDE5NDQyNCwiZXhwIjoxNTQ0MjgwODI0LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.W8mqJDbLKhjUlQlom8xkch8xwGOOKAJ8UU6q5YmshIMB5LlytStXtBWYkCaJtncDFCeFuur3ZABeA0pe7J3njmI-Ydp0857iy4Qn0QAhkcWeLf15K3IYFLmoEAv3NYOkdLvwaZptA--fkaAs5XXwnPh-BtpRJ2lmZ_lLbDVTwYdTS8g6S6_FWkAzAF9dnEHj1uniNGYfg6B2vkoTY0zyo24JwvjfqqtmSx6dLc3Wl8fXNTw1iP8TqhPIYJoGRI04Dm8ELqgt7VjRF-qgYkOUTAm8qoZoGQSv6KpcId1NJpBIhm6WOrzduvR_3S2xC1pMLm24bF3CYH5yQr8Fn_eNdFJzUPMNCT6zBYs9S4EpXjt8FC8B4bVhMOctgpcSGz0biQeanc53u9uFHlNqjzDouPr3xYla7ISNh1kKIMCDrY-UQa6yJg373oaHH--xCjqKcIViZqgLAe6xj6THJjcQ0TQM02C_vPrw-uxgeujhDCgtarQ8thWrxxx17boM25QjKnUDkSKx3VdkOLtZn5OmjSgu7nmIPmUWG3SBXT9ki2Qj_MYtGO4UvDCgn0D4LsmYuHu2uIz1I04YOZ2sv2d3yykW4C1pi_ziCp_uZyhFpIANIVHiEtfSm0MQYqdbVqDrQDhXFZkCzbVCAm-oXdm51KeHqpNfeKqEXYvtTkaYVoQ';

    constructor(loadingSpinner:TerraLoadingSpinnerService, http:Http)
    {
        super(loadingSpinner, http, 'http://master.login.plentymarkets.com/rest/users');
    }

    public getUsers():Observable<TerraPagerInterface<UserInterface>>
    {
        this.setAuthorization();
        this.setHeader();

        let url:string;

        // set itemsPerPage to a high value to ensure that notes show correctly.
        url = this.url + '?itemsPerPage=1000&page=1';

        if(!isNullOrUndefined(this.dataModel[this.url]))
        {
            return of(this.dataModel[this.url]);
        }

        return this.mapRequest(this.http.get(url, {
            headers: this.headers,
            body:    ''
        })).pipe(tap((users:TerraPagerInterface<UserInterface>) =>
            this.dataModel[this.url] = users));
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }
}
