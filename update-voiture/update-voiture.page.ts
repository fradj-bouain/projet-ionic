import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoitureService} from '../service/voiture.service';
import  {NavController } from '@ionic/angular';   // for direction
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.page.html',
  styleUrls: ['./update-voiture.page.scss'],
})
export class UpdateVoiturePage implements OnInit {
  ajouter : FormGroup;  // objet
  voitureName : String;
  matrecule : String;
  id : String;
  getValue : any;
  voiture : any;
 mode : any;

  constructor(
    public FormBuilder : FormBuilder, // serice
    public  voitureService : VoitureService,
    public navCtrl: NavController,
    private router: ActivatedRoute

  ) {
    this.ajouter = this.FormBuilder.group({
      nomVoiture: ['' , [Validators.required, Validators.min(0)]],
      matrecule: ['' , [Validators.required, Validators.min(0), ]],
      mode: ['',[Validators.required, Validators.min(0)]],
    });
   }

   modifierVoiture(){
    const ajout = this.ajouter.value;
     this.voitureService.updateVoiture(ajout , this.getValue).toPromise().then((response)=>{
      console.log("response add",response)
      this.navCtrl.navigateRoot('/voiture');
    });
  }

  ngOnInit() {
   
    this.getValue= this.router.snapshot.paramMap.get("id")
    this.getValue = String(this.getValue);

    this.voitureService.getVoiture(this.getValue).toPromise().then((response)=>{
      console.log("response getuser",response)
     
        this.voiture = response._source;
           this.voitureName = this.voiture.nomVoiture
           this.matrecule = this.voiture.matrecule
           this.mode = this.voiture.mode

                  });
          
  
  }

}
