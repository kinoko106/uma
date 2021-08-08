import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';

import { RaceSchedulerComponent } from './race-scheduler/race-scheduler.component';
import { SidebarComponent } from './sidebr-contents/sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebr-contents/sidebar-button/sidebar-button.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TestPageAComponent } from './contents/test-page-a/test-page-a.component';
import { TestPageBComponent } from './contents/test-page-b/test-page-b.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceSchedulerComponent,
    SidebarComponent,
    SidebarButtonComponent,
    HeaderComponent,
    MainContentComponent,
    TestPageAComponent,
    TestPageBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    ListboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
