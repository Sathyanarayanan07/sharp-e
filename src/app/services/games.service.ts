import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseUrl = 'http://localhost:3000/app/game'
  constructor(private http: HttpClient) {}

  getAllGames(queryValue = null) {
    return (queryValue)?this.http.get(this.baseUrl+'/all',{params: queryValue}) :
      this.http.get(this.baseUrl+'/all')
  }

  getAllGenres() {
    return this.http.get(this.baseUrl+'/genres');
  }

  getGame(id) {
    return this.http.get(this.baseUrl+'/search/'+id)
  }

  searchGame(queryValue) {
    return this.http.get(this.baseUrl+'/search_term/',{params: { game_name: queryValue}})
  }

  getCount() {
    return this.http.get(this.baseUrl+'/count');
  }
}
