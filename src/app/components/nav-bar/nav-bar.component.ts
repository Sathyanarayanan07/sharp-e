import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'sharp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modal: BsModalService) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modal.show(template);
  }

  ngOnInit(): void {
  }

}
