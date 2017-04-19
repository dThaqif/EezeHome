import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { CameraPage } from '../pages/camera/camera';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/location/location';
import { LoginPage } from '../pages/login/login';
import { PropertiesPage } from '../pages/properties/properties';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    CameraPage,
    HomePage,
    TabsPage,
    LocationPage,
    LoginPage,
    PropertiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    CameraPage,
    HomePage,
    TabsPage,
    LocationPage,
    LoginPage,
    PropertiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
export class AppComponent {}