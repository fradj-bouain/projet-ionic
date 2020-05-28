import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.page.html',
  styleUrls: ['./propos.page.scss'],
})
export class ProposPage implements OnInit {
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
