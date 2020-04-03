import { Component, OnInit,TemplateRef, EventEmitter, Output } from '@angular/core';
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
  constructor(private fb : FormBuilder, private userService: UsersServiceService, private router : Router) {
  }

  @Output() closeModal = new EventEmitter();

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
  rememberMe;
  loginUnsuccessful = false;
  initialDataNotLoaded = false;
  // Service methods
  submitForm() {
    this.userService.loginUser(this.loginForm.value).subscribe((response:any)=>{
      if(response && response.token) {
        localStorage.setItem('token', response.token as string);
        this.closeModal.emit();
        this.router.navigate(['/']);
    }
    },error=>{
      if(!this.initialDataNotLoaded) {
        this.loginUnsuccessful = true;
      }

    })
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((response)=>{
    },error => {
      this.initialDataNotLoaded = true;
    })
  }

}
