import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import  {NavController  } from '@ionic/angular';   // for direction
import { AuthenticationService } from './service/Authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  username: any;


  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'A propos',
      url: '/propos',
      icon: 'information-circle'
    },
    {
      title: 'Voitures',
      url: '/voiture',
      icon: 'logo-model-s'
    },
    {
      title: 'Ajouter Vehcule',
      url: '/add-voiture',
      icon: 'add-circle'
    },
    {
      title: 'contact',
      url: '/conatct',
      icon: 'contact'
    }
  ];


  constructor(
    public storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private authenticationService: AuthenticationService,
    private router:Router

   

    ) {
    this.initializeApp();
     
       this.storage.get("name").then((val) => {
        console.log('get ' , val);
        this.username = val;
    })
      console.log("storage",this.storage.get("name"))


  }



  disconnect(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });


    });
  }
}
