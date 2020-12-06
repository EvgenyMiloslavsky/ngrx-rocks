import {EntityMetadataMap} from "@ngrx/data";
import {userMetadata} from "./user.metadata";
import {User} from "./user";

export const entityMetadata: EntityMetadataMap = {
    // User: userMetadata
    User:
        {
            selectId: (user: User) => user._id
        }
}
