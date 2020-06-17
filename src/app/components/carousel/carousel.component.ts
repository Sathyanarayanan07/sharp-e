import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'sharp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent{
  @Input() products;
  itemsPerSlide = 5;
}
