import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sharp-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  constructor(private gameService : GamesService,private route: Router) { }
  showSuggestion=false;
  suggestions:[];
  onSearchChange(value) {
    if(value.length >1) {
      this.gameService.searchGame(value).subscribe((data:[]) =>{
        if(data.length) {  
          this.suggestions = data;
          this.showSuggestion = true;
        }
        else {
          this.showSuggestion = false;
        }
      },error=>console.log(error));
    }
    else {
      this.showSuggestion = false;

    }
  }

  searchSubmit(value) {
    console.log(value)
    this.route.navigate(['/products/'],{ queryParams : { game_name: value } })
  }

  onClickListItem(item) {
    this.route.navigate(['/product',item._id])
  }

  onBlur() {
    this.showSuggestion = false;
  }

  ngOnInit(): void {
  }

}
