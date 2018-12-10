import { Injectable } from '@angular/core';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';
import {
    Http,
    Response
} from '@angular/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { ContactInterface } from './contact.interface';

@Injectable()
export class BasicContactService extends TerraBaseService
{
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg2ZTY2MDdkNzI1NGI0OTRjMmZkMTE5YjRhMjM0MTk4ZWFmNTFmMzRjNWU0Y2NhY2Q5MGNlMzE4MmQ4MDRiOWJmZTM3ZWU3YjU3NjMzZTE4In0.eyJhdWQiOiIxIiwianRpIjoiODZlNjYwN2Q3MjU0YjQ5NGMyZmQxMTliNGEyMzQxOThlYWY1MWYzNGM1ZTRjY2FjZDkwY2UzMTgyZDgwNGI5YmZlMzdlZTdiNTc2MzNlMTgiLCJpYXQiOjE1NDQzNzg4MTcsIm5iZiI6MTU0NDM3ODgxNywiZXhwIjoxNTQ0NDY1MjE3LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.dtX5KCa_vH-1KB1z-T4Xcx3Am6scDPNos6w5SgGVcXyaYmcoXGmsFiW5Kzg601NBZP_oin2pxrv2iA_oBN1GqTLrRsrie62EUSolZjq65TnUt01QkBQyzY-W5wTrm_3qBcmAqXgj9vnP6CvIQRJdzvx9wGpR_lt64kJ41bYkTByRCrTlGUmNjV8sp2LfLRiik6e9XaoLKHjJNr7szeho6wMX1gAjrBh3LqeEM6UKYrY222-hTnImrhKg_bAstwytszJf0Wu1i-mvAiXiCL5TKozMmgOG8-zseldffi0QS5i8cNYuvgSyQYEAgOGas7N9_7CzE5lNOtObTRg7Bbl_wfKf7UM03GoyjwYSnfa5AqaaEsjEQmwRr6D8jVC_6T0ikLOPEXU6S1dV72J_iLFd9cegS75fLxf5skPD1chV71q4q_Earxl3dSei1TA2R85_1Y96OIYdgc8oIkRPYNlVEk354ZG4xIu05T_Q7d5v6OrFeBvUh5ycXcREaQJZ-E6VrP5eXii0lxRU6O7gZtx80nkRwiq64v5gjxT5BKx_29wq1uWuIVdHToihPOQTzWsfjho1sOvDoMN1BpYJrTe7vDUXsOMRdhf-ZvNcFjN2_Q23Z6S2iZDliEk7UhlqLI7ouhd_8sZGQFU42lY0l2r_XL8PFw3GWReAyLzbQqzJ_xc'

    constructor(loadingSpinnerService:TerraLoadingSpinnerService,
                http:Http)
    {
        super(loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts');
    }

    public getContactById(contactId:number):Observable<ContactInterface>
    {
        this.setHeader();

        return this.mapRequest(this.http.get(
            this.url + '/' + contactId,
            {
                headers: this.headers,
                body:    ''
            }
        ));
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }

}
