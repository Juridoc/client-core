import * as RestDB from '@singleware/restdb';
import * as Entities from './entities';
/**
 * Client driver class.
 */
export declare class Client extends RestDB.Common.Driver {
    /**
     * Last response error.
     */
    private lastError;
    /**
     * Update the last error entity based on the current payload.
     */
    private updateError;
    /**
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insertion result or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | undefined;
    /**
     * Get the found entity list from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity list or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    protected getFindResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R[] | undefined;
    /**
     * Get the found entity from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity or undefined when the entity wasn't found or an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    protected getFindByIdResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | undefined;
    /**
     * Get the number of updated entities from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the number of updated entities or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    protected getUpdateResponse(model: RestDB.Model, response: RestDB.Responses.Output): number | undefined;
    /**
     * Get the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status or undefined when an error occurs.
     */
    protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined;
    /**
     * Get the replaced entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the replaced entity status or undefined when an error occurs.
     */
    protected getReplaceByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined;
    /**
     * Get the number of deleted entities from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the number of deleted entities or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    protected getDeleteResponse(model: RestDB.Model, response: RestDB.Responses.Output): number | undefined;
    /**
     * Get the deleted entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the deleted entity status or undefined when an error occurs.
     */
    protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean | undefined;
    /**
     * Get the number of entities from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the number of entities or undefined when an error occurs.
     * @throws Throws an error when the server response is invalid.
     */
    protected getCountResponse(model: RestDB.Model, response: RestDB.Responses.Output): number | undefined;
    /**
     * Get the last response error.
     */
    get error(): Entities.Error | undefined;
    /**
     * Set a new authorization token.
     * @param token New token.
     * @returns Returns the instance itself.
     */
    setAuthorization(token: string): Client;
}
