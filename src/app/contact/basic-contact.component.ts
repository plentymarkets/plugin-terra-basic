import { Component } from '@angular/core';

@Component({
    selector:'basic-contact',
    template: require('./basic-contact.component.html'),
    styles: [require('./basic-contact.component.scss')]
})
export class BasicContactComponent
{
    private pageText:string;

    constructor()
    {
        this.pageText = 'This is a test';
    }
}
