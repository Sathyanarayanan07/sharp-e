import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../validators/must-match-validator';
import { UsersServiceService } from '../../services/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sharp-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() login = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  registrationSuccess: boolean = false;
  alreadyRegistered: boolean = false;

  constructor(
    private fb : FormBuilder,
    private userService : UsersServiceService,
    private router : Router
    ) { }

  registerForm = this.fb.group({
    user_name : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(70)]],
    user_email : ['',[Validators.required,Validators.email]],
    user_password_1 : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(70)]],
    user_password_2 : ['',[Validators.required]],
  }, {
    validator: MustMatch('user_password_1', 'user_password_2')
})

    // Getter methods
    get user_name() {
      return this.registerForm.get('user_name');
    }

    get user_email() {
      return this.registerForm.get('user_email');
    }
  
    get user_password_1() {
      return this.registerForm.get('user_password_1');
    }

    get user_password_2() {
      return this.registerForm.get('user_password_2');
    }

    submitForm() {
      this.userService.registerUser(this.registerForm.value).subscribe((response:any)=>{
        if(response.status == 201) {
          this.registrationSuccess = true;
          setTimeout(() => {
            this.closeModal.emit();
            this.router.navigate(['/']);
        }, 3000);
      }
      },error=>{
        if('status' in error && error.status == 409) {
          this.alreadyRegistered = true;
        }
      })
    }

  ngOnInit(): void {

  }
  

}
