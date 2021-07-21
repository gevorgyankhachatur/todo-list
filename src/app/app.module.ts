import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
