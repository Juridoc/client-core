/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Entities from './entities';

/**
 * Client driver class.
 */
@Injection.Describe({ singleton: true, name: 'client' })
@Class.Describe()
export class Client extends RestDB.Common.Driver {
  /**
   * Last response error.
   */
  @Class.Private()
  private lastError: Entities.Error | undefined;

  /**
   * Update the last error entity based on the current payload.
   */
  @Class.Private()
  private updateError(): boolean {
    if (this.payload instanceof Object) {
      this.lastError = RestDB.Outputer.createFull(Entities.Error, this.payload, []);
      if (this.lastError?.code !== void 0 && this.lastError?.text !== void 0) {
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
  @Class.Protected()
  protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | undefined {
    try {
      this.lastError = void 0;
      return super.getInsertResponse(model, response);
    } catch (exception) {
      if (this.updateError()) {
        throw new Error(this.lastError!.text);
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
  @Class.Protected()
  protected getFindResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R[] | undefined {
    try {
      this.lastError = void 0;
      return super.getFindResponse(model, response);
    } catch (exception) {
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
  @Class.Protected()
  protected getFindByIdResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | undefined {
    try {
      this.lastError = void 0;
      return super.getFindByIdResponse(model, response);
    } catch (exception) {
      if (this.updateError()) {
        throw new Error(this.lastError!.text);
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
  @Class.Protected()
  protected getUpdateResponse(model: RestDB.Model, response: RestDB.Responses.Output): number | undefined {
    try {
      this.lastError = void 0;
      return super.getUpdateResponse(model, response);
    } catch (exception) {
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
  @Class.Protected()
  protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined {
    try {
      this.lastError = void 0;
      return super.getUpdateByIdResponse(model, response);
    } catch (exception) {
      if (this.updateError()) {
        throw new Error(this.lastError!.text);
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
  @Class.Protected()
  protected getReplaceByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined {
    try {
      this.lastError = void 0;
      return super.getReplaceByIdResponse(model, response);
    } catch (exception) {
      if (this.updateError()) {
        throw new Error(this.lastError!.text);
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
  @Class.Protected()
  protected getDeleteResponse(model: RestDB.Model, response: RestDB.Responses.Output): number | undefined {
    try {
      this.lastError = void 0;
      return super.getDeleteResponse(model, response);
    } catch (exception) {
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
  @Class.Protected()
  protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined {
    try {
      this.lastError = void 0;
      return super.getDeleteByIdResponse(model, response);
    } catch (exception) {
      if (this.updateError()) {
        throw new Error(this.lastError!.text);
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
  @Class.Protected()
  protected getCountResponse(model: RestDB.Model, response: RestDB.Responses.Output): number | undefined {
    try {
      this.lastError = void 0;
      return super.getCountResponse(model, response);
    } catch (exception) {
      if (this.updateError()) {
        return void 0;
      }
      throw exception;
    }
  }

  /**
   * Get the last response error.
   */
  @Class.Public()
  public get error(): Entities.Error | undefined {
    return this.lastError;
  }

  /**
   * Set a new authorization token.
   * @param token New token.
   * @returns Returns the instance itself.
   */
  @Class.Public()
  public setAuthorization(token: string): Client {
    this.setKeyHeaderValue(token);
    return this;
  }
}
