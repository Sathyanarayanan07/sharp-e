import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sharp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pageNumber = 1;
  limit = 12;
  products;
  imageLoader = true;
  noResultsFound = false;
  lastNumber;

  constructor(
    private gameService : GamesService,
    private route: Router,
    private activatedRoute : ActivatedRoute
  ) { }

  productItemClicked(product) {
    this.route.navigate(['/product/',product._id])
  }

  onChangePage(page) {
    this.activatedRoute.queryParams.subscribe((data)=>{
        const filter = Object.assign({limit : this.limit},data);
        filter['pageNumber'] = page;
        this.gameService.getAllGames(filter).subscribe((games:any)=> {
          this.products = games.data;
        })
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data)=> {
      const filter = Object.assign({limit : this.limit},data);
        this.gameService.getAllGames(filter).subscribe((games:any)=>{
          this.products = games.data;
          this.lastNumber = games.lastPage;
          if(!this.products.length) {
            this.noResultsFound = true;
          }
        })
    })
  }


}
