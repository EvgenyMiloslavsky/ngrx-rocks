import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DefaultDataServiceConfig, EntityDataModule} from "@ngrx/data";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {entityMetadata} from "./entities/user/entities.metadata";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SERVER_BASE_DOMAIN} from "../environments/environment";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: SERVER_BASE_DOMAIN,
    timeout: 3000, // request timeout,

}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot(state => state),
        EffectsModule.forRoot(),
        EntityDataModule.forRoot({entityMetadata: entityMetadata}),
        StoreDevtoolsModule.instrument(),
        FormsModule
    ],
    providers: [{provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig}],
    bootstrap: [AppComponent]
})
export class AppModule {
    /*constructor(entityDataService: EntityDataService, userDataService: UserDataService) {
        entityDataService.registerService('User', userDataService)
    }*/
}
