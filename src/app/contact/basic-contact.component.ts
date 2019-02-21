import { Component,
    Input, Output, EventEmitter, OnInit, AfterViewInit } from "@angular/core";

@Component({
    selector:'basic-contact',
    templateUrl:'./basic-contact.component.html',
    styleUrls: ['./basic-contact.component.scss']
})
export class BasicContactComponent implements OnInit, AfterViewInit
{
    protected exampleText:string = 'Bye World';


    @Input()
    public pageTextValue:string = 'default';

    @Output()
    public stringEmitter:EventEmitter<string> = new EventEmitter<string>();

    constructor()
    {

    }

    public ngOnInit():void
    {

    }

    public ngAfterViewInit():void
    {
        this.stringEmitter.emit('emittedValue');
    }
}
