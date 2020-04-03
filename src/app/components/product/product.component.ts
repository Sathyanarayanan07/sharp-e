import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private route : ActivatedRoute, private gameService: GamesService) { }

  gameData;
  rate;
  ngOnInit(): void {
    this.route.paramMap.subscribe((routeData)=>{
      this.gameService.getGame(routeData.get('id')).subscribe((gameData)=>{
        this.gameData = gameData;
        this.rate = this.gameData.game_sharp_rating;
      })

    })
  }

}
