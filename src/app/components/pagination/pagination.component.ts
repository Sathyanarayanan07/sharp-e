import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sharp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pageNumber;
  @Output() changePage = new EventEmitter;
  @Input() lastNumber;
  previousNumber;
  nextNumber;

  comeBack() {
    if(this.pageNumber !== 1) {
      this.pageNumber = this.pageNumber - 1; 
      this.previousNumber = this.pageNumber - 1;
      this.nextNumber = this.pageNumber+1;
      this.changePage.emit(this.pageNumber);
    }
  }

  goFront() {
    if(this.pageNumber !== this.lastNumber) {
    this.pageNumber = this.pageNumber + 1; 
    this.previousNumber = this.pageNumber - 1;
    this.nextNumber = this.pageNumber+1;
    this.changePage.emit(this.pageNumber);
    }
  }

  ngOnInit(): void {
     this.previousNumber = this.pageNumber-1;
     this.nextNumber = this.pageNumber+1;
  }

}
