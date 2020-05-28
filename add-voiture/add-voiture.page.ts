import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoitureService} from '../service/voiture.service';
import  {NavController, IonSlides } from '@ionic/angular';   // for direction
import { Base64 } from '@ionic-native/base64/ngx';



@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.page.html',
  styleUrls: ['./add-voiture.page.scss'],
})
export class AddVoiturePage implements OnInit {
  ajouter : FormGroup;  // objet

  
slideOptions = {
  initialSlide: 1,
  speed: 5000,
  
};

  constructor(
    public FormBuilder : FormBuilder, // serice
    public  voitureService : VoitureService,
    public navCtrl: NavController,
    private base64: Base64,
  ) {
    this.ajouter = this.FormBuilder.group({
      nomVoiture: ['' , [Validators.required, Validators.min(0)]],
      matrecule: ['' , [Validators.required, Validators.min(0), ]],
      mode: ['libre',[Validators.required, Validators.min(0)]],
      image: ['',[Validators.required, Validators.min(0)]],
    });



   }

   addVoiture(){
    const ajout = this.ajouter.value;
    
   let filePath: string = '../../assets/images/bck/bck1.jpg';
    console.log(this.base64.encodeFile(filePath));
    console.log(filePath);

    this.base64.encodeFile(filePath).then((base64File: string) => {
      console.log(base64File);
    }, (err) => {
      console.log(err);
    });
      
      
     this.voitureService.addVoiture(ajout).toPromise().then((response)=>{
      console.log("response add",response)
      this.navCtrl.navigateRoot('/voiture');
    });
  }

  slidesDidLoadNews(slides: IonSlides) {
    slides.startAutoplay();
  }

  ngOnInit() {
  }
  

}
