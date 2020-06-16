import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hideProducts: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 600) {
      this.hideProducts = true;
    }
  }

}
