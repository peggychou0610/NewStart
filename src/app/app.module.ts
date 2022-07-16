import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HeroService }          from './services/hero.service';
import { MessageService }       from './services/message.service';
import { MessagesComponent }    from './messages/messages.component';
import { DashboardModule } from './dashboard-module/dashboard-module.module';
import { HeroesModule } from './heroes-module/heroes-module.module';
import { SharedModule } from './shared-module/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    HeroesModule,
    SharedModule.forRoot(),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    )
  ],
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
