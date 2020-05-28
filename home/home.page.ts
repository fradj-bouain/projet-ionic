import { Component } from '@angular/core';
import {VoitureService} from '../service/voiture.service';
import  {NavController , AlertController, IonSlides,MenuController } from '@ionic/angular';   // for direction
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
voitures : any;
username : any;

slideOptions = {
  initialSlide: 1,
  speed: 10,
  effect : 'fade'
  
};

slideOptions2 = {
  initialSlide: 1,
  speed: 5000,
  effect : 'fade'
  
};
  constructor(
    public voitureService : VoitureService,
    public storage: Storage,
    private menu: MenuController


  ) {
    this.menu.enable(true);


    const username = this.storage.get("name").then((val:any) => {
      console.log('get ' , val);
      this.username = val;
  })
    

  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  
  }

  slidesDidLoadNews(slides: IonSlides) {
    
    slides.startAutoplay();
  }
  

  redirectToDelete(id){
   
    
    this.voitureService.delete(id).toPromise().then((response)=>{
      console.log("delet",response)
    })
    window.location.reload();
  }

  
  ngOnInit() {

    this.voitureService.all().toPromise().then((response)=>{
     this.voitures = response.hits.hits;
      console.log("response",this.voitures)
    });
  
  }


}
