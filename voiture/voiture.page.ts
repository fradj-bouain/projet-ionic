import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../service/voiture.service';
import  { AlertController,ToastController , IonSlides} from '@ionic/angular';   // for direction

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.page.html',
  styleUrls: ['./voiture.page.scss'],
})
export class VoiturePage implements OnInit {
  voitures : any;
  
  
  slideOptions = {
    initialSlide: 1,
    speed: 5000,
    
  };

  

  

  constructor(    public voitureService : VoitureService,
                  public toastController: ToastController,
                  public alertCtrl : AlertController,

    ) { }


    
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: '',
      color:"danger",
      message: " cette voiture en duree du location a d'autre client choisir autre voiture SVP !  ",
      position: 'top',
      buttons: [
      , {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }



  modeVoiture(){
    this.presentToastWithOptions(); 
  }

  slidesDidLoadNews(slides: IonSlides) {
    slides.startAutoplay();
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }




  redirectToDelete(id){
   
    this.voitureService.deleteVoiture(id).toPromise().then((response)=>{
      console.log("delet",response)
    })
    window.location.reload();
 
  }

  
  ngOnInit() {
    this.voitureService.allVoiture().toPromise().then((response)=>{
     this.voitures = response.hits.hits;
      console.log("response",this.voitures)
    });
  }

}
