"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PluginTerraBasicComponent = /** @class */ (function () {
    function PluginTerraBasicComponent() {
        this.newContact = {
            firstName: 'Tim',
            lastName: 'Wieder'
        };
    }
    PluginTerraBasicComponent = __decorate([
        core_1.Component({
            selector: 'terra-basic-app',
            template: require('./plugin-terra-basic.component.html'),
            styles: [require('./plugin-terra-basic.component.scss')],
        })
    ], PluginTerraBasicComponent);
    return PluginTerraBasicComponent;
}());
exports.PluginTerraBasicComponent = PluginTerraBasicComponent;
//# sourceMappingURL=plugin-terra-basic.component.js.map