"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Entities = require("./entities");
/**
 * Client driver class.
 */
let Client = class Client extends RestDB.Common.Driver {
    /**
     * Update the last error entity based on the current payload.
     */
    updateError() {
        var _a, _b;
        if (this.payload instanceof Object) {
            this.lastError = RestDB.Outputer.createFull(Entities.Error, this.payload, []);
            if (((_a = this.lastError) === null || _a === void 0 ? void 0 : _a.code) !== void 0 && ((_b = this.lastError) === null || _b === void 0 ? void 0 : _b.text) !== void 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insertion result or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    getInsertResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getInsertResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                throw new Error(this.lastError.text);
            }
            throw exception;
        }
    }
    /**
     * Get the found entity list from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity list or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    getFindResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getFindResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                return void 0;
            }
            throw exception;
        }
    }
    /**
     * Get the found entity from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity or undefined when the entity wasn't found or an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    getFindByIdResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getFindByIdResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                throw new Error(this.lastError.text);
            }
            throw exception;
        }
    }
    /**
     * Get the number of updated entities from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the number of updated entities or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    getUpdateResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getUpdateResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                return void 0;
            }
            throw exception;
        }
    }
    /**
     * Get the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status or undefined when an error occurs.
     */
    getUpdateByIdResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getUpdateByIdResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                throw new Error(this.lastError.text);
            }
            throw exception;
        }
    }
    /**
     * Get the replaced entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the replaced entity status or undefined when an error occurs.
     */
    getReplaceByIdResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getReplaceByIdResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                throw new Error(this.lastError.text);
            }
            throw exception;
        }
    }
    /**
     * Get the number of deleted entities from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the number of deleted entities or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    getDeleteResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getDeleteResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                return void 0;
            }
            throw exception;
        }
    }
    /**
     * Get the deleted entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the deleted entity status or undefined when an error occurs.
     */
    getDeleteByIdResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getDeleteByIdResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                throw new Error(this.lastError.text);
            }
            throw exception;
        }
    }
    /**
     * Get the number of entities from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the number of entities or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    getCountResponse(model, response) {
        try {
            this.lastError = void 0;
            return super.getCountResponse(model, response);
        }
        catch (exception) {
            if (this.updateError()) {
                return void 0;
            }
            throw exception;
        }
    }
    /**
     * Get the last response error.
     */
    get error() {
        return this.lastError;
    }
    /**
     * Set a new authorization token.
     * @param token New token.
     * @returns Returns the instance itself.
     */
    setAuthorization(token) {
        this.setKeyHeaderValue(token);
        return this;
    }
};
__decorate([
    Class.Private()
], Client.prototype, "lastError", void 0);
__decorate([
    Class.Private()
], Client.prototype, "updateError", null);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getFindResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getFindByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getUpdateResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getUpdateByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getReplaceByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getDeleteResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getDeleteByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getCountResponse", null);
__decorate([
    Class.Public()
], Client.prototype, "error", null);
__decorate([
    Class.Public()
], Client.prototype, "setAuthorization", null);
Client = __decorate([
    Injection.Describe({ singleton: true, name: 'client' }),
    Class.Describe()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map