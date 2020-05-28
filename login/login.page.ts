import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader'; // add this line
import { IonSlides, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoitureService} from '../service/voiture.service';
import  {NavController,LoadingController } from '@ionic/angular';   // for direction
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ajouterUser : FormGroup;  // objet
  user : FormGroup;  // objet
users : any;
  username: any;
  constructor(
    public storage: Storage,
    public FormBuilder : FormBuilder, // serice
    public  voitureService : VoitureService,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private menu: MenuController
  ) { 
    this.ajouterUser = this.FormBuilder.group({
      username: ['' , [Validators.required, Validators.min(0)]],
      email: ['' , [Validators.required, Validators.min(0), ]],
      password: ['',[Validators.required, Validators.min(0)]],
    });
    
    this.user = this.FormBuilder.group({
      username: ['' , [Validators.required, Validators.min(0)]],
      password: ['',[Validators.required, Validators.min(0)]],
    });
    this.menu.enable(false);

 
  }


  addUser(){
    const ajout = this.ajouterUser.value;
     this.voitureService.addUser(ajout).toPromise().then((response)=>{
      console.log("response add",response)
      this.navCtrl.navigateRoot('/home');
      window.location.reload();

    });
  }

 
  login(){
    const verif = this.user.value;
    this.voitureService.LoginUser(verif).toPromise().then( (response )=>{
      this.users = response.hits.hits;
      console.log("users",this.users)
       if( this.users.length != 0){
                alert("found")
              this.storage.set("name",verif.username);
                this.navCtrl.navigateRoot('/home');

       }else{
         alert("not found")
   }
       
  });

  }

 

  
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  slidesDidLoadLogin(slides: IonSlides) {
   slides.slidePrev();
  }
  slidesDidLoadInsc(slides: IonSlides) {
    slides.slideNext();
  }


  ngOnInit() {
    this.menu.enable(false);

    defineCustomElements(window); // call the function here

  }

}
