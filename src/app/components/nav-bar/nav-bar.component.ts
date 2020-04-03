import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'sharp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  modalRef: BsModalRef;
  tokenExists;
  constructor(private modal: BsModalService, private route: Router) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modal.show(template);
  }

  closeModalAfterLogin() {
    this.modalRef.hide();
    this.tokenExists = true;
  }

  logOut() {
    localStorage.removeItem('token');
    this.tokenExists = false;
    this.route.navigate(['/'])
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.tokenExists = true;
    }
  }

}
