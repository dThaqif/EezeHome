import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/location/location';
import { LoginPage } from '../pages/login/login';
import { PropertiesPage } from '../pages/properties/properties';
import { CameraPage } from '../pages/camera/camera';
import { SearchPage } from '../pages/search/search';


@Component({
  templateUrl: 'app.html'
})
export class IconPage{}

export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

constructor(private camera: Camera) { }

...


const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
  }
}
