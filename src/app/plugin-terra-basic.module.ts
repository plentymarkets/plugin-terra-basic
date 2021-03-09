import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { StartComponent } from './views/start/start.component';
import { L10nLoader, L10nTranslationModule, L10nTranslationService } from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import { l10nConfig } from './core/localization/l10n.config';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutingProviders, routing } from './plugin-terra-basic.routing';
import { StartViewComponent } from './views/start-view.component';
import { RouterViewComponent } from './views/router/router-view.component';
import { MainMenuComponent } from './views/menu/main-menu.component';
import { TerraComponentsModule, TerraMatPaginatorIntl, TerraNodeTreeConfig } from '@plentymarkets/terra-components';
import { ExampleViewComponent } from './views/example/example-view.component';
import { TableComponent } from './views/example/overview/table/table.component';
import { FilterComponent } from './views/example/overview/filter/filter.component';
import { OverviewViewComponent } from './views/example/overview/overview-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactService } from './services/contact.service';
import { PlaceHolderService } from './core/placeholder/placeholder.service';
import { MatSelectModule } from '@angular/material/select';
import { interceptorProviders } from './core/http';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserLanguage } from './core/localization/user-language';

export function initL10n(l10nLoader: L10nLoader): Function {
    return (): Promise<any> => l10nLoader.init();
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        L10nTranslationModule.forRoot(l10nConfig, { userLanguage: UserLanguage }),
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
        TerraComponentsModule,
        routing,
        MatSelectModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSortModule,
        MatSlideToggleModule
    ],
    declarations: [
        PluginTerraBasicComponent,
        RouterViewComponent,
        MainMenuComponent,
        StartViewComponent,
        StartComponent,
        ExampleViewComponent,
        TableComponent,
        FilterComponent,
        OverviewViewComponent
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initL10n,
            deps: [L10nLoader],
            multi: true
        },
        {
            provide: MatPaginatorIntl,
            useClass: TerraMatPaginatorIntl,
            deps: [L10nTranslationService]
        },
        interceptorProviders,
        appRoutingProviders,
        TerraNodeTreeConfig,
        ContactService,
        PlaceHolderService
    ],
    bootstrap: [PluginTerraBasicComponent]
})
export class PluginTerraBasicModule {}
