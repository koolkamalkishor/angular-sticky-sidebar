import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StickySidebarDirective } from './controls/sticky-sidebar/sticky-sidebar.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule],
  declarations: [ AppComponent, StickySidebarDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
