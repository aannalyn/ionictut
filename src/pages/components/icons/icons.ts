import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-icons',
  templateUrl: 'icons.html',
})
export class IconsPage {
  myIcon:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIcon = 'home';
  }

}
