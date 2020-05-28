import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoitureService} from '../service/voiture.service';
import  {NavController } from '@ionic/angular';   // for direction
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
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
      nom: ['' , [Validators.required, Validators.min(0)]],
      email: ['' , [Validators.required, Validators.min(0), Validators.email]],
      prenom: ['',[Validators.required, Validators.min(0)]],
      age: ['',[Validators.required, Validators.min(0)]],
      adresse: ['',[Validators.required, Validators.min(0)]],
      tel: ['',[Validators.required, Validators.min(0)]],
      ville: ['',[Validators.required, Validators.min(0)]],
      codePostal: ['',[Validators.required, Validators.min(0)]],
      voiture: ['',[Validators.required, Validators.min(0)]],
      datePrise: ['',[Validators.required, Validators.min(0)]],
      dateRemise: ['',[Validators.required, Validators.min(0)]],
      matrecule: ['',[Validators.required, Validators.min(0)]],
      image: ['',[Validators.required, Validators.min(0)]]
    });
  }

  add(){
    this.mode = 'louer'
    const ajout = this.ajouter.value;
    this.voitureService.updateMode(this.mode , this.getValue, this.matrecule , this.voitureName).toPromise().then((response)=>{
      console.log("response add",response)
    });
     this.voitureService.add(ajout).toPromise().then((response)=>{
      console.log("response add",response)
      this.navCtrl.navigateRoot('/home');
    });
  }

  update(){}


  ngOnInit() {
    
    this.getValue= this.router.snapshot.paramMap.get("id")
    this.getValue = String(this.getValue);

    this.voitureService.getVoiture(this.getValue).toPromise().then((response)=>{
      console.log("response getuser",response)
      if(response.found){
         this.voiture = response._source;
           this.voitureName = this.voiture.nomVoiture
           this.matrecule = this.voiture.matrecule
           this.mode = this.voiture.mode
         
     }else{ alert('id not found ');}
       
          }, (err)=>{
            if (!err.error.found){alert('user not found')}
            else { alert('server problem')}
        
          });
          this.navCtrl.navigateRoot('/reservation');
          
  
    

  }

}
