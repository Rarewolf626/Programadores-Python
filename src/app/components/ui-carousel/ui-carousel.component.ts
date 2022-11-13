import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-carousel',
  templateUrl: './ui-carousel.component.html',
  styleUrls: ['./ui-carousel.component.css'],
})
export class UiCarouselComponent implements OnInit {
  @Input() items!: any[];
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
