import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { GithubService } from './github.service';


@NgModule({
  declarations: [
    AppComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
    providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
