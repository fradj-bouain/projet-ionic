import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders , } from '@angular/common/http';
import { StmtModifier } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  header : HttpHeaders;


 
  constructor(public http : HttpClient) { 
    this.header= new HttpHeaders();
    this.header= this.header.append('Content-type', 'application/json');
    this.header = this.header.append('Accept', 'application/json');
  }
  


  /////////////////////////////////// location //////////////////////////////////////////////
  all(){
    let url='/vehicule/reservation/_search'
    return this.http.get(url,{headers : this.header})
  }

  add(reservation) 
{
  let url = '/vehicule/reservation'
  console.log(url);
  return this.http.post(url, reservation, { headers: this.header })
} 

updateMode(mode , id , matrecule , voiture){
  let url = '/louer/ajouter/' + id
  console.log("matrecule",matrecule);
  return this.http.post(url, { "matrecule" : matrecule , "nomVoiture" : voiture ,  "mode" : mode }, { headers: this.header })
}

delete(id){
  let url = '/vehicule/reservation/' + id
  return this.http.delete(url,{headers : this.header})
}


//////////////////////////////////////////// Voitures //////////////////////////////////

addVoiture(ajouter) 
{
  let url = '/louer/ajouter'
  console.log(url);
  return this.http.post(url, ajouter, { headers: this.header })
} 

allVoiture(){
  let url='/louer/ajouter/_search'
  return this.http.get(url,{headers : this.header})
}

getVoiture(id){
  let url = '/louer/ajouter/' + id
  return this.http.get(url,{headers:this.header})
}
deleteVoiture(id){
  let url = '/louer/ajouter/' + id
  return this.http.delete(url,{headers : this.header})
}
updateVoiture(ajout , id){
  let url = '/louer/ajouter/' + id
  console.log(url);
  return this.http.post(url, ajout, { headers: this.header })
} 

//////////////////////////////////////////// User //////////////////////////////////

addUser(ajouter) 
{
  let url = '/user/ajouter'
  console.log("ajouter user",ajouter)
  return this.http.post(url, ajouter, { headers: this.header })
} 

LoginUser(user){
  console.log(user)

  let url =  '/user/ajouter/_search';
  let body = {
    "query" : {
      "bool" : {
        "must" : [
          { "match" : { "username" : user.username }},
          { "match" : { "password" : user.password }}
        ]
      }
    }
  }
 return this.http.post(url,body,{headers: this.header})
}
}
