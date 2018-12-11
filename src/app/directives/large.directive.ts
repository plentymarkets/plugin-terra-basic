import {
    Directive,
    ElementRef
} from '@angular/core';

@Directive({
    selector: '[terraLarge]'
})
export class LargeDirective
{
    constructor(el:ElementRef)
    {
        el.nativeElement.style.fontSize = 'xx-large';
    }
}
