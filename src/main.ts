import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { PluginTerraBasicModule } from './app/plugin-terra-basic.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(PluginTerraBasicModule)
    .catch((err: any) => console.error(err));
