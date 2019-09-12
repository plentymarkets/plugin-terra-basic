import {
    Directive,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[ptbLarge]'
})
export class LargeDirective implements OnInit
{
    @Input('ptbLarge')
    public size:string;

    constructor(private el:ElementRef)
    {
        el.nativeElement.style.fontSize = 'large';
    }

    public ngOnInit():void
    {
        this.el.nativeElement.style.font = this.size;
    }
}
