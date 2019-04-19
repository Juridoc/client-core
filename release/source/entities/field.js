"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Field entity class.
 */
let Field = class Field extends Class.Null {
    /**
     * Get the field label or value.
     */
    toString() {
        var _a;
        return (_a = this.label) !== null && _a !== void 0 ? _a : this.value;
    }
};
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "value", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "label", void 0);
__decorate([
    Class.Public()
], Field.prototype, "toString", null);
Field = __decorate([
    RestDB.Schema.Entity('field'),
    Class.Describe()
], Field);
exports.Field = Field;
//# sourceMappingURL=field.js.map