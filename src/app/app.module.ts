import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BottomDrawerComponent } from './bottom-drawer/bottom-drawer.component';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { TopDrawerComponent } from './top-drawer/top-drawer.component';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';
import { BottomSlideOverDrawerComponent } from './bottom-slide-over-drawer/bottom-slide-over-drawer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BottomDrawerComponent, DrawerContainerComponent, TopDrawerComponent, DrawerContentComponent, BottomSlideOverDrawerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
