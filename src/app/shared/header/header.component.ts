import { Component, ViewChild,OnInit } from '@angular/core';
import{SwiperContainer} from '../header/swiper.components'


declare var Swiper: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'Angular with Swiper';
  @ViewChild('homeSlide', {static: true}) public homeSlide: SwiperContainer;

  public swipeOptions = {
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };


  constructor() { }

  ngOnInit(): void {
  }

  goToNextPage() {
    this.homeSlide.swiper.slideNext();
  }
}
