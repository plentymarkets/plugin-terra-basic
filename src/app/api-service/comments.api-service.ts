import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {
    TerraBaseService,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';
import { CommentInterface } from './comment.interface';
import { isNullOrUndefined } from 'util';
import { ApiHelper } from '../helper/api.helper';

@Injectable()
export class CommentsService extends TerraBaseService
{
    private bearer:string = ApiHelper.bearer;

    constructor(spinner:TerraLoadingSpinnerService, http:Http)
    {
        super(spinner, http, 'http://master.login.plentymarkets.com/rest/comments');
    }

    public getCommentsByReferenceValueAndType(referenceType:string, referenceId:number):Observable<Array<CommentInterface>>
    {
        this.setHeader();

        return this.handleLocalDataModelGet(this.http.get(this.url + '/' + referenceType + '/' + referenceId,
            {
                headers: this.headers,
                body:    ''
            }), referenceId);
    }

    public createNote(note:CommentInterface, contactId:number):Observable<CommentInterface>
    {
        this.setHeader();
        return this.handleLocalDataModelPost(this.http.post(this.url,
            {},
            {
                headers: this.headers,
                body:    note
            }
        ), contactId);
    }

    public updateNote(note:CommentInterface, contactId:number):Observable<CommentInterface>
    {
        this.setHeader();
        return this.handleLocalDataModelPut(this.http.put(this.url + '/' + note.id,
            {},
            {
                headers: this.headers,
                body:    note
            }
        ), contactId);
    }

    public deleteNote(note:CommentInterface):Observable<void>
    {
        this.setHeader();
        return this.handleLocalDataModelDelete(this.http.delete(this.url + '/' + note.id,
            {
                headers: this.headers
            }), note.id);
    }

    private setHeader():void
    {
        if(!isNullOrUndefined(this.bearer) && this.bearer.length > 0)
        {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    }
}
