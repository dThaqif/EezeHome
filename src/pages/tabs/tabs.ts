import { Component } from '@angular/core';

import { CameraPage } from '../camera/camera';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any = HomePage;
  tab2Root:any = CameraPage;
  tab3Root:any = SearchPage;

  constructor() {

  }
}
