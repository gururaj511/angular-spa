import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaListComponent } from './spa-list/spa-list.component';
import { FormCreateEditComponent } from './form-create-edit/form-create-edit.component';
import { UserService } from './service/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpaListComponent,
    FormCreateEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
