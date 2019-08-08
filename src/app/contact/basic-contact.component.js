"use strict";
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
var basic_contact_service_1 = require("./basic-contact.service");
var BasicContactComponent = /** @class */ (function () {
    function BasicContactComponent(basicContactService) {
        this.basicContactService = basicContactService;
        this.stringEmitter = new core_1.EventEmitter();
        this.stringArray = ['first', 'second', 'third'];
        this.ourBool = false;
        this.contact = {
            firstName: '',
            lastName: ''
        };
        this.stringEmitter.emit();
    }
    Object.defineProperty(BasicContactComponent.prototype, "pageTextValue", {
        set: function (pageText) {
            this.pageText = pageText;
            this.stringEmitter.emit(pageText);
        },
        enumerable: true,
        configurable: true
    });
    BasicContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basicContactService.getContactById(102).subscribe(function (contact) {
            _this.contact.firstName = contact.firstName;
            _this.contact.lastName = contact.lastName;
            console.log(contact);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], BasicContactComponent.prototype, "stringEmitter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BasicContactComponent.prototype, "pageTextValue", null);
    BasicContactComponent = __decorate([
        core_1.Component({
            selector: 'basic-contact',
            template: require('./basic-contact.component.html'),
            styles: [require('./basic-contact.component.scss')]
        }),
        __metadata("design:paramtypes", [basic_contact_service_1.BasicContactService])
    ], BasicContactComponent);
    return BasicContactComponent;
}());
exports.BasicContactComponent = BasicContactComponent;
//# sourceMappingURL=basic-contact.component.js.map