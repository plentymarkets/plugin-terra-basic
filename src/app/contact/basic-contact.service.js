"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var terra_components_1 = require("@plentymarkets/terra-components");
var http_1 = require("@angular/http");
var util_1 = require("util");
var BasicContactService = /** @class */ (function (_super) {
    __extends(BasicContactService, _super);
    function BasicContactService(loadingSpinnerService, http) {
        var _this = _super.call(this, loadingSpinnerService, http, 'http://master.login.plentymarkets.com/rest/accounts/contacts') || this;
        _this.bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmYjIxYTFmNGVjZTM3MzgzYjFlNzFiM2U3Y2M4YzhiNmJhNDg5MDI5ZWQyMzIyMTFhNTUxZWVhNzNiYjc1OWQ0N2I3N2Y2ZTBmN2M2Yjk1In0.eyJhdWQiOiIxIiwianRpIjoiZGZiMjFhMWY0ZWNlMzczODNiMWU3MWIzZTdjYzhjOGI2YmE0ODkwMjllZDIzMjIxMWE1NTFlZWE3M2JiNzU5ZDQ3Yjc3ZjZlMGY3YzZiOTUiLCJpYXQiOjE1NDQ1MDI3NDMsIm5iZiI6MTU0NDUwMjc0MywiZXhwIjoxNTQ0NTg5MTQzLCJzdWIiOiIzIiwic2NvcGVzIjpbIioiXX0.nNuSfNLHIbPJPk9zRmjOM35XsJ4afX3a0VVImWmyEcbelKbmQ6xX4zMO3vtQLVeCioUBXvIKPw_3fvs4CzOn4_6esxBu4zD8uAzcTKYKH4zQGX8YV7BT2eDpDV29KDrnK37uIg4OQ7Kyas8jaGn8kvVB1l2tzcRJ7bQdT6dc3xl5Sb22VQ2S5FkkrLptgMJkdPmeVmXzCVxJop5skoRQ3ZNqbNQheyyH5-R6SqKjRFd5m4LLHLSVUJRphVl36nMtBOfSpUH3g4hgSbjU0qsscSC4BrbvegjFBwIomQpZFm8ApBWpyfQ5XuL65n0Wz6AYvT1p6BdZWGzPXwT9LMzQX7sj37gqieFM_HGU3xs3DU5Izb62PeuoL8eWn184rJXm2TTGbeEilHt88nD9g9JPQLPMa9ntXV47OXpQ83EeQpb9Dqh9xPEuZAzSLV2dlPX-RIx7OwjvDb6maom17ZzLBPP8Zybdp0SPzxmFE_ONyaNluIs--4E5YdlQftrvEHUHyUJmfKagQneeYHcD-znPH_EaVy9V-C-aObXUZysguW7HyxqFvgO062EaN7OwE_wkpTmb3tAFHfthlz3GY4NZGNXEJIInDNTTne0IIQoVrPxutPPkMBnvAcumGy4ezqY383xjIbJIv3s55ueKmqnaZ8-E-sMc0UfGXMAOV6H_6k8';
        return _this;
    }
    BasicContactService.prototype.getContactById = function (contactId) {
        this.setHeader();
        return this.mapRequest(this.http.get(this.url + '/' + contactId, {
            headers: this.headers,
            body: ''
        }));
    };
    BasicContactService.prototype.setHeader = function () {
        if (!util_1.isNullOrUndefined(this.bearer) && this.bearer.length > 0) {
            this.headers.set('Authorization', 'Bearer ' + this.bearer);
        }
    };
    BasicContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [terra_components_1.TerraLoadingSpinnerService,
            http_1.Http])
    ], BasicContactService);
    return BasicContactService;
}(terra_components_1.TerraBaseService));
exports.BasicContactService = BasicContactService;
//# sourceMappingURL=basic-contact.service.js.map