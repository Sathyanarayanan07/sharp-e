import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseUrl = 'http://localhost:3000/app/game'
  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http.get(this.baseUrl+'/all')
  }

  getGame(id) {
    return this.http.get(this.baseUrl+'/search/'+id)
  }

  searchGame(queryValue) {
    return this.http.get(this.baseUrl+'/search_term/',{params: { game_name: queryValue}})
  }
}
