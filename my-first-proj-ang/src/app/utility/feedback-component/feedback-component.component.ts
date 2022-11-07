import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-component',
  templateUrl: './feedback-component.component.html',
  styleUrls: ['./feedback-component.component.css']
})
export class FeedbackComponentComponent implements OnInit {


  feedbackForm:FormGroup;

  constructor() { 
    this.feedbackForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      subject: new FormControl(),
      message: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  submitFeedback()
  {
    console.log('submit feedback');
    console.log(this.feedbackForm.controls["email"].value); 
    console.log(this.feedbackForm.controls["subject"].value); 
    console.log(this.feedbackForm.controls["message"].value); 
  }

}
