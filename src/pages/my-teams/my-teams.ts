import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage, TournamentsPage } from '../pages';

/*
  Generated class for the MyTeams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
