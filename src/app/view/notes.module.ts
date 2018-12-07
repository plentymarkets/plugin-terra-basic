import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { NotesComponent } from './notes.component';
import { CommentsService } from '../api-service/comments.api-service';
import { UsersService } from '../api-service/user.api-service';
import { UserDataService } from '../api-service/user-data.api-service';

@NgModule({
    imports:      [
        CommonModule,
        TerraComponentsModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [NotesComponent],
    exports:      [NotesComponent]
})

export class NotesModule
{
    public static forRoot():ModuleWithProviders
    {
        return {
            ngModule:  NotesModule,
            providers: [
                CommentsService,
                UsersService,
                UserDataService
            ]
        };
    }
}
