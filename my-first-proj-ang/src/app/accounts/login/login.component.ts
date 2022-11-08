import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/logger.contract';

//Model Driven Forms:Check - https://github.com/venu-shastri/angular-building-blocks/blob/main/Angular-Forms.md
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm:FormGroup;
  constructor(@Inject("logger") private logger:ILogger) { 
    this.loginForm = new FormGroup({
      userName:new FormControl('',Validators.required),
      password: new FormControl('',[Validators.minLength(8),Validators.required])
    })

  }

  ngOnInit(): void {
  }

  login(){
    //console.log("login called");
    //alert(this.loginForm.controls["userName"].value)
    //console.log(this.loginForm);
    this.logger.write(this.loginForm.controls["userName"].value);
  }

  
  clear(){
    console.log("clear called");
    this.loginForm.reset();
  }
}