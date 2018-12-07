import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {
    TerraButtonInterface,
    TerraOverlayButtonInterface,
    TerraOverlayComponent,
    TerraPagerInterface
} from '@plentymarkets/terra-components';
import { TranslationService } from 'angular-l10n';
import { isNullOrUndefined } from 'util';
import { CommentsService } from '../api-service/comments.api-service';
import { CommentInterface } from '../api-service/comment.interface';
import { UserInterface } from '../api-service/user.interface';
import { AlertHelper } from '../helper/alert.helper';
import { UsersService } from '../api-service/user.api-service';
import { Observable } from 'rxjs/Observable';
import { UserDataService } from '../api-service/user-data.api-service';
import { UserData } from '../api-service/user-data';

@Component({
    selector: 'notes',
    template: require('./notes.component.html')
})
export class NotesComponent extends AlertHelper implements OnInit
{
    @ViewChild(TerraOverlayComponent) public overlayDeleteConfirmation:TerraOverlayComponent;

    @Input() public selectedNoteId:number;
    @Output() public editNote:EventEmitter<CommentInterface> = new EventEmitter<CommentInterface>();
    protected confirmDeleteOverlay:{
        title:string;
        primaryButtonInterface:TerraOverlayButtonInterface;
        secondaryButtonInterface:TerraOverlayButtonInterface;
        text:string;
    };

    private readonly contactId:number = 131;
    private noteTextIterator:number = 1;

    private users:Array<UserInterface> = [];
    private notes:Array<CommentInterface> = [];
    private userData:UserData;

    constructor(translation:TranslationService,
                private commentsService:CommentsService,
                private usersService:UsersService,
                private userDataService:UserDataService)
    {
        super(translation);

        this.confirmDeleteOverlay = {
            title:                    '',
            primaryButtonInterface:   null,
            secondaryButtonInterface: null,
            text:                     ''
        };
    }

    public ngOnInit():void
    {
        this.getData().subscribe((data:any) =>
        {
            this.users = data['users'];
            this.notes = data['notes'];
            this.userData = data['userData'];
        });

        this.setupConfirmationDialog();
    }

    public deleteNote(note:CommentInterface):void
    {
        // change overlay text
        this.confirmDeleteOverlay.text = this.translation.translate('crm.notes.confirmationDialogDelete', {id: note.id});

        // re-define click function
        this.confirmDeleteOverlay.primaryButtonInterface.clickFunction = ():void =>
        {
            // delete note
            this.commentsService.deleteNote(note).subscribe(
                () =>
                {
                    this.handleMessage(this.translation.translate('crm.notes.deleteSuccessful'));
                },
                () =>
                {
                    this.handleError(this.translation.translate('crm.notes.deleteError'));
                }
            );

            // close overlay
            this.overlayDeleteConfirmation.hideOverlay();
        };

        // show overlay
        this.overlayDeleteConfirmation.showOverlay();
    }

    protected createNoteHeaderText(note:CommentInterface):string
    {
        let user:UserInterface = this.getUserById(note.userId);
        if(isNullOrUndefined(user) && isNullOrUndefined(note))
        {
            return '';
        }

        if(isNullOrUndefined(user))
        {
            return new Date(note.createdAt).toLocaleString() + 'by unknown user';
        }

        if(isNullOrUndefined(note))
        {
            return 'by ' + user.real_name;
        }

        return new Date(note.createdAt).toLocaleString() + ' ' + 'by' + ' ' + user.real_name;
    }

    protected addNote():void
    {
        let newNote:CommentInterface =
            {
                id:                  null,
                referenceValue:      this.contactId,
                userId:              this.userData.userId,
                createdAt:           '',
                text:                'Test note #' + ++this.noteTextIterator,
                referenceType:       'contact',
                isVisibleForContact: true
            };

        this.commentsService.createNote(newNote, this.contactId).subscribe(() =>
            {
                this.handleMessage('Note saved');
            },
            () =>
            {
                this.handleError('Note not saved');
            }
        );
    }

    private getData():Observable<any>
    {
        return Observable.combineLatest(
            this.usersService.getUsers().map((res:TerraPagerInterface<UserInterface>) => res.entries),
            this.commentsService.getCommentsByReferenceValueAndType('contact', this.contactId),
            this.userDataService.getUserData(),
            (users:Array<UserInterface>,
             notesOfUser:Array<CommentInterface>,
             userData:UserData) =>
            {
                return {
                    users: users,
                    notes: notesOfUser,
                    userData: userData
                };
            }
        );
    }

    private setupConfirmationDialog():void
    {
        // setup confirmation dialog
        this.confirmDeleteOverlay.primaryButtonInterface = {
            icon:          'icon-success',
            caption:       'delete',
            tooltipText:   '',
            isDisabled:    false,
            clickFunction: null
        };
        this.confirmDeleteOverlay.secondaryButtonInterface = {
            icon:          'icon-cancel',
            caption:       'cancel',
            tooltipText:   '',
            isDisabled:    false,
            clickFunction: ():void => this.overlayDeleteConfirmation.hideOverlay()
        };
    }

    private getUserById(userId:number):UserInterface
    {
        return this.users.find((user:UserInterface) => user.id === userId);
    }
}
