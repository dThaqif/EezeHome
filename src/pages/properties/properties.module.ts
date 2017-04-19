import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Properties } from './properties';

@NgModule({
  declarations: [
    Properties,
  ],
  imports: [
    IonicModule.forChild(Properties),
  ],
  exports: [
    Properties
  ]
})
export class PropertiesModule {}
