import {
    Component,
    OnInit
} from '@angular/core';
import { TerraMultiSplitViewConfig } from '@plentymarkets/terra-components';
import { View1Module } from './view1/view1.module';
import { View2Module } from './view2/view2.module';
import { View3Module } from './view3/view3.module';

@Component({
    selector:    'ptb-split-view',
    templateUrl: './split-view.component.html',
    styleUrls:   ['./split-view.component.scss']
})
export class SplitViewComponent implements OnInit
{

    public splitViewConfig:TerraMultiSplitViewConfig = new TerraMultiSplitViewConfig();

    public ngOnInit():void
    {
        this.splitViewConfig.addView({
            name:              'View1',
            module:            View1Module.forRoot(),
            mainComponentName: View1Module.getMainComponent(),
            defaultWidth:      'col-md-2'
        });

        this.splitViewConfig.addView({
            name:              'View2',
            module:            View2Module.forRoot(),
            mainComponentName: View2Module.getMainComponent(),
            defaultWidth:      'col-md-10'
        });

        this.splitViewConfig.addView({
            name:              'View3',
            module:            View3Module.forRoot(),
            mainComponentName: View3Module.getMainComponent(),
            defaultWidth:      'col-md-8'
        });
    }

}
