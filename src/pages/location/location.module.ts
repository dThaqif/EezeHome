import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Location } from './location';

@NgModule({
  declarations: [
    Location,
  ],
  imports: [
    IonicModule.forChild(Location),
  ],
  exports: [
    Location
  ]
})
export class LocationModule {}
