import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

// @Injectable({providedIn: 'root'})
export class UserDataService extends DefaultDataService<User> {

    constructor(
        httpClient: HttpClient,
        httpUrlGenerator: HttpUrlGenerator) {
        super('User', httpClient, httpUrlGenerator);
    }

    getAll(): Observable<User[]> {
        return super.getAll().pipe(map(res => res['payload']));
    }
}
