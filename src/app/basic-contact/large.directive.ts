import {
    Directive,
    ElementRef
} from '@angular/core';

@Directive({
    selector: 'p:not([otherDirective])'
})
export class LargeDirective
{
    constructor(el:ElementRef)
    {
        el.nativeElement.style.color = 'blue';
        el.nativeElement.style.fontSize = '30px';
    }
}

