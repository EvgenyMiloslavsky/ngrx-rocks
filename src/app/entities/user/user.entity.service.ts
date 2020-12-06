import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";
import {User} from "./user";
import {Injectable} from "@angular/core";

// @Injectable({providedIn: "root"})
export class UserEntityService extends EntityCollectionServiceBase<User> {
    constructor(elementFactory: EntityCollectionServiceElementsFactory) {
        super('User', elementFactory);
    }
}
