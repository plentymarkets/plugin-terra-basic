import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';


@Injectable()
export class StatsDataService extends TerraBaseService
{
    // tslint:disable-next-line:max-line-length
    private readonly token:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE1MTIyMGE5OTU5NTk3MTQ2M2FjNzQ0NTg2ZjZhYjk4ZjcwYmExZGE1MjkwZTA1OTk1ZmJkYmRjNGI3NzI3MDZlMWIzOWU0YmVjMjVkZTk3In0.eyJhdWQiOiIxIiwianRpIjoiMTUxMjIwYTk5NTk1OTcxNDYzYWM3NDQ1ODZmNmFiOThmNzBiYTFkYTUyOTBlMDU5OTVmYmRiZGM0Yjc3MjcwNmUxYjM5ZTRiZWMyNWRlOTciLCJpYXQiOjE1Mjc4NDIxNTAsIm5iZiI6MTUyNzg0MjE1MCwiZXhwIjoxNTI3OTI4NTUwLCJzdWIiOiI2Iiwic2NvcGVzIjpbIioiXX0.FroJ8Qj_-BOS7siKPsqihoJg1h4CV4qKR9MR-wyJwiwnUWLOeZqq2TYvte_CoV0TTvMQUKwHenHzQX0t167Z2EGV7eDZYY4FvjUL6Laj-lydfPte5cXcXvjb-b7G0p3uZ1iDpfsCHyuDyXuWgvXbTwHLeAiBRRFHBi8cikCDc5nESlx8h9Ixm_W7n-AMkqnEHc8xSIeuLBzcroyZdMkk-daEDq7sNgEBbz_REttGm7af4KAa2sa5L3b_ULVoeuDG18HnilU6TIjX1oKTISFGm42prDexa5dvsqvN4RwPo3zdOPgE5YuIbfnOHQFjvQi_E2CQRzJ6vYgc1rtm47aB3zNTNfyfQlXxG4cFbC3xWEelX8NBGlLFfGAfhGdjVxTT95JtS68myAQwS1hT0wj8A7ZeH3rsr5Mt4N-yW5ViuOj9PeRmnDaOcarFprqcxSryazaUGKUa-nuRTY0S3RuYz9XzMFrY9JxPPzC9Vf-wqddzaIXpa_z6AQxE_VKrDF-wEW_JabOQgi5gj8UKedrHr4Qu-AJOh_StFd3NhL47mxQU9px5Mqs8jd02S0298nJYNblMmTJPZ61oCTocKD6sTM373nmfUmDppv9W_WVGEVtJOjp1Lwb4SPtWSVOhqvAplZnvf_etK9E9hMq5xD6soDdWEXOwO6L-b-MnOJUF4QI';
    private readonly testSystemUrl:string = 'http://master.login.plentymarkets.com';

    constructor(private _loadingSpinnerService:TerraLoadingSpinnerService,
                private _http:Http)
    {
        super(_loadingSpinnerService, _http, '', true);

        this.setAuthorization();

        if(process.env.ENV !== 'production')
        {
            this.url = this.testSystemUrl + this.url;
            this.setToHeader('Authorization', 'Bearer ' + this.token);
        }
    }

    public getRestCallData(restRoute:string):Observable<Array<any>>
    {
        return this.mapRequest(
            this.http.get(this.url + restRoute, {
                headers: this.headers
            })
        );
    }
}
