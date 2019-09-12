import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TerraComponentsModule } from '@plentymarkets/terra-components';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactService } from './contact.service';
import { LargeDirective } from '../large.directive';
import { ModPipe } from './mod.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, TerraComponentsModule],
    declarations: [ContactComponent, ContactViewComponent,
                   LargeDirective,
                   ModPipe],
    exports: [ContactViewComponent],
    providers: [ContactService]
})
export class ContactModule
{}
