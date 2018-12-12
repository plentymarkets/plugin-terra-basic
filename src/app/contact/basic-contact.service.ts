import { Injectable } from '@angular/core';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';
import { Http } from '@angular/http';
import { isNullOrUndefined } from 'util';
import { ContactInterface } from './contact.interface';
import { Observable } from 'rxjs';

@Injectable()
export class BasicContactService extends TerraBaseService
{
    private bearer:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA3YzE0OGNhNGY4ZGYzMWRmNWRhZTE4YmIzNjhhOWYzZmYwMmM3ZWVmMzA3YjMyYjIxZmIzZmU2ZWVlMTYzYjcwMmI4ZmUxYTI0NzM3Mjc0In0.eyJhdWQiOiIxIiwianRpIjoiMDdjMTQ4Y2E0ZjhkZjMxZGY1ZGFlMThiYjM2OGE5ZjNmZjAyYzdlZWYzMDdiMzJiMjFmYjNmZTZlZWUxNjNiNzAyYjhmZTFhMjQ3MzcyNzQiLCJpYXQiOjE1NDQ2MTM2MzUsIm5iZiI6MTU0NDYxMzYzNSwiZXhwIjoxNTQ0NzAwMDM1LCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.MoKzSlXbmDDJNOjwFGgcnEacSiFECQAMc0L4pQ40Tuaqw_amHFiiTI1mRl7aZ4b7mTK-_guKPBJiHPZTRkif-edMdAL0z0vJzgpIU2cu2MgBuJ8FASKAPyZSjgAQmgitHGLh6LTgGXU7HJLtjlezwjhOInrnaSNyIMMbFxQWz8yelffMM1UlALl4omOT1RMfzTZvNLgbSS6aXpfPN9vMrQa-YPUjyfUaTBYM0fyDS9KntJp8by5UuYR9XfgTYfuim68k7LOJsZsS101cLmfWG6TLeRJ3dLNnPRUuQCeYBfB3QIC2RJExFMvXdRbKeahNKxfsDYz96Anfd8b_XqkA7YjQJ7l7cAIaLYeAuQi3Cpv3V7liEiheJrVYSxsif_OCOzaHZbgdTeELNcSUaF50vz7yudH64vaEc-8-MkQ0Q-94bgEM3rf6SwG60Vgcs68l0zn_GFYPN5ox7tOZpkdtJ7nD_6VPoB4mEwdH1qOWlFvDBdOHa-PWC_GNhFUqEHv54iWYCKXwx2mWiCiDcyrJrLda2Rz5IMH2_4s7ucdm2Tw9iH8TZiRD4p3Fn7cQF-lhuZnzDpT_gh06FvXm6GrUDBhWF00LNyILRU_UIUtKOvE_Iii0UqZHOwUiQeC5oa8PSq9aLULiJAB8OApjEddB-DtAiOWhvdfne76mj19yteQ';

    private counter:number = 0;

    constructor(loadingSpinnerService:TerraLoadingSpinnerService,
                http:Http)
    {
        super(loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts');
    }

    public getCounter():number
    {
        return this.counter;
    }

    public setCounter(counter:number):void
    {
        this.counter = counter;
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

    public getText():string
    {
        return 'This is our serviceText';
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }
}
