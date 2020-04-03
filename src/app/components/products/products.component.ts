import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sharp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  p: number = 1;
  products;
  imageLoader = true;
  constructor(private gameService : GamesService,private route: Router,private activatedRoute : ActivatedRoute) { }

  productItemClicked(product) {
    this.route.navigate(['/product/',product._id])
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data)=> {
      if((!data) || !(data.game_name)) {
        this.gameService.getAllGames().subscribe((gameData)=>{
          this.products = gameData;
        })
      }
      else {
        this.gameService.searchGame(data.game_name).subscribe((gameData:[]) =>{
          if(gameData.length) {  
            this.products = gameData;
          }
          else {
            this.products = [];
          }
        },error=>console.log(error));
      }
    })
  }

}
