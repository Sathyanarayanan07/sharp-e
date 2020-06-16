import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sharp-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(
    private gameService : GamesService,
    private route: Router,
    private fb: FormBuilder
    ) { }

  years = [];
  ratings = [1,2,3,4,5]
  showSuggestion=false;
  suggestions:[];
  genres;

  searchForm = this.fb.group({
    game_name : ['',Validators.required],
    game_genre : [''],
    game_released_year : [''],
    game_sharp_rating : ['']
  })

  searchSubmit() {
    const filters = this.searchForm.value;
    this.route.navigate(['/products/'],{ queryParams : filters })
  }

  generateYears() {
    let endYear = new Date().getFullYear();
    for(let startYear = 1990;startYear <= endYear;++startYear) {
        this.years.push(startYear);
    }
  }

  onClickListItem(item) {
    this.route.navigate(['/product',item._id])
  }

  onBlur() {
    this.showSuggestion = false;
  }

  ngOnInit(): void {
    this.generateYears();
    this.searchForm.get('game_name').valueChanges.subscribe((value)=>{
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
    })
    this.gameService.getAllGenres().subscribe((genres:any)=>{
      this.genres = genres;
    })
  }
}


