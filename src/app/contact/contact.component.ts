import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';

export interface ContactInterface
{
    id:number;
    firstName:string;
    lastName:string;
}

@Component({
    selector: 'ptb-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges
{
    @Input()
    public contact:ContactInterface;

    @Output()
    public buttonClicked:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    constructor()
    {}

    public ngOnInit():void
    {
        // this.text = 'Contact works';
    }

    public ngOnChanges(changes:SimpleChanges):void
    {

    }
}
