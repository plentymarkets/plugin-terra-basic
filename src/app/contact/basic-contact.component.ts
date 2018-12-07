import {
    Component,
    Input,
    EventEmitter,
    Output
} from '@angular/core';

@Component({
    selector: 'basic-contact',
    template: require('./basic-contact.component.html'),
    styles:   [require('./basic-contact.component.scss')]
})
export class BasicContactComponent
{
    @Output()
    public stringEmitter:EventEmitter<string> = new EventEmitter<string>();

    private pageText:string;

    @Input()
    public set pageTextValue(pageText:string)
    {
        this.pageText = pageText;
        this.stringEmitter.emit(pageText);
    }

    constructor()
    {
        this.stringEmitter.emit();
    }
}
