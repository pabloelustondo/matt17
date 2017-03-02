import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MattDataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MattDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
