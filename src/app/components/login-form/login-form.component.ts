import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tech-sharp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  users:[]
  notVerified: boolean;
  constructor(private fb : FormBuilder, private userService: UsersServiceService, private router : Router) {
  }

  @Output() closeModal = new EventEmitter();
  @Output() loginSuccess = new EventEmitter();
  @Output() signUp = new EventEmitter();

  loginForm = this.fb.group({
    user_email : ['',[Validators.required,Validators.email]],
    user_password : ['',Validators.required]
  })

  isLoginFormValid = false;

  // Getter methods
  get user_email() {
    return this.loginForm.get('user_email');
  }

  get user_password() {
    return this.loginForm.get('user_password');
  }
  
  loginUnsuccessful = false;

  // Service methods
  submitForm() {
    this.userService.loginUser(this.loginForm.value).subscribe((response:any)=>{
      if(response.status == 200) {
        localStorage.setItem('token', response.token as string);
        this.loginSuccess.emit();
        this.closeModal.emit();
        this.router.navigate(['/']);
    }
    },error=>{
      if('status' in error && error.status == 403) {
        this.notVerified = true;
        this.loginUnsuccessful = null;
      }
      else {
        this.loginUnsuccessful = true;
      }
    })
  }

  ngOnInit(): void {

  }

}
