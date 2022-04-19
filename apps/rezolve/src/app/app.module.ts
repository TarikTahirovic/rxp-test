import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestbuttonComponent } from './testbutton/testbutton.component';
import { TesticonComponent } from './testicon/testicon.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TestbuttonComponent, TesticonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
