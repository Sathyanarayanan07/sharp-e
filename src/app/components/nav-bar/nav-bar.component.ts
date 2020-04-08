import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'sharp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  modalRef: BsModalRef;
  signUpForm = false;
  isUserLoggedIn;
  constructor(private modal: BsModalService, private route: Router,private userService : UsersServiceService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modal.show(template);
  }

  logOut() {
    this.userService.logOutUser();
    this.isUserLoggedIn = false;
    this.route.navigate(['/'])
  }

  ngOnInit(): void {
      this.isUserLoggedIn = this.userService.isUserLoggedIn();
  }

}
