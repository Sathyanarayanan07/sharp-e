import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'tech-sharp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  users:[]
  constructor(private fb : FormBuilder, private userService: UsersServiceService) {
  }

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

  // Service methods
  submitForm() {
    console.log(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe((response)=>{
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((response)=>{
      console.log(response);
    })
  }

}
