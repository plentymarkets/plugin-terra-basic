import { Component } from '@angular/core';
import { TerraFilter } from '@plentymarkets/terra-components';

@Component({
    selector: 'ptb-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent {
    public filter: TerraFilter<any> = new TerraFilter<any>();
}
