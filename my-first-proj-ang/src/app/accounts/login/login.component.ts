import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';

//Model Driven Forms:Check - https://github.com/venu-shastri/angular-building-blocks/blob/main/Angular-Forms.md
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor() { 
    this.loginForm = new FormGroup({
      userName:new FormControl('',Validators.required),
      password: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm);
    //this.logger.write(this.loginForm.controls["userName"].value);
  }

  
  clear(){
    this.loginForm.reset();
  }

}
