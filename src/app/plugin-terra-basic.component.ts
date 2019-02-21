import { Component } from '@angular/core';

@Component({
    selector: 'terra-basic-app',
    template: require('./plugin-terra-basic.component.html'),
    styles:   [require('./plugin-terra-basic.component.scss')],
})
export class PluginTerraBasicComponent
{
    protected parentText:string = 'unchangedText';

    protected ToggleTextMethod():void
    {
        this.parentText = 'changedText';
    }

    protected eventMethod(eventString:string):void
    {
        this.parentText = eventString;
    }
}
