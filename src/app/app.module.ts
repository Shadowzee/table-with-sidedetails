import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { SideDetailsComponent } from './side-details/side-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SideDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
