import {
    Component,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector:      'terra-basic-app',
    template:      require('./plugin-terra-basic.component.html'),
    styles:        [require('./plugin-terra-basic.component.scss')],
    encapsulation: ViewEncapsulation.None
})
export class PluginTerraBasicComponent
{
}
