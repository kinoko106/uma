import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceSchedulerComponent } from './race-scheduler/race-scheduler.component';
import { SidebarComponent } from './sidebr-contents/sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebr-contents/sidebar-button/sidebar-button.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ButtonModule } from 'primeng/button'

@NgModule({
  declarations: [
    AppComponent,
    RaceSchedulerComponent,
    SidebarComponent,
    SidebarButtonComponent,
    HeaderComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
