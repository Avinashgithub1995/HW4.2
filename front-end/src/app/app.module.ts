import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPlayerComponent,
    AddPlayerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
