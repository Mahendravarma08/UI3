import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    console.log("Constructor called.");
  }

  signupForm: FormGroup = new FormGroup({
    username: new FormControl([Validators.required, Validators.min(10)]),
    email: new FormControl([Validators.required, Validators.min(10)]),
    password: new FormControl([Validators.required, Validators.min(10)]),
    repeatPassword: new FormControl([Validators.required, Validators.min(10)])
  })
  ngOnInit() {
    console.log("NG OnInit called.")
    console.log(this.signupForm);

  }



}
