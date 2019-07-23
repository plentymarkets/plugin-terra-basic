"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var plugin_terra_basic_component_1 = require("./plugin-terra-basic.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/common/http");
var app_1 = require("@plentymarkets/terra-components/app");
var basic_contact_component_1 = require("./basic-contact/basic-contact.component");
var basic_contact_service_1 = require("./basic-contact/basic-contact.service");
var large_directive_1 = require("./basic-contact/large.directive");
var other_directive_1 = require("./basic-contact/other.directive");
var PluginTerraBasicModule = /** @class */ (function () {
    function PluginTerraBasicModule() {
    }
    PluginTerraBasicModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                http_2.HttpClientModule,
                app_1.TerraComponentsModule.forRoot()
            ],
            declarations: [
                plugin_terra_basic_component_1.PluginTerraBasicComponent,
                basic_contact_component_1.BasicContactComponent,
                large_directive_1.LargeDirective,
                other_directive_1.OtherDirective
            ],
            providers: [
                basic_contact_service_1.BasicContactService
            ],
            bootstrap: [
                plugin_terra_basic_component_1.PluginTerraBasicComponent
            ]
        })
    ], PluginTerraBasicModule);
    return PluginTerraBasicModule;
}());
exports.PluginTerraBasicModule = PluginTerraBasicModule;
//# sourceMappingURL=plugin-terra-basic.module.js.map