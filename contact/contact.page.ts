import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  slideOptions = {
    initialSlide: 1,
    speed: 5000,
    
  };
  constructor() { }

  slidesDidLoadNews(slides: IonSlides) {
    slides.startAutoplay();
  }
  
  ngOnInit() {
  }

}
