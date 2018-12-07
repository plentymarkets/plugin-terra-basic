import { Component } from '@angular/core';

@Component({
    selector: 'terra-basic-app',
    template: require('./plugin-terra-basic.component.html'),
    styles:   [require('./plugin-terra-basic.component.scss')],
})
export class PluginTerraBasicComponent
{
    private parentText:string;

    constructor()
    {
        this.parentText = 'Input test';
    }
    private toggleText():void
    {
        if(this.parentText === '')
        {
            this.parentText = 'Input test';
        }
        else
        {
            this.parentText = '';
        }
    }

    private handleString(stringParam:string):void
    {
        console.log(stringParam);
    }
}
