import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  loginform!: FormGroup;
  ngOnInit() {
    console.log('HI')
    this.InitializeForm();
  }
  InitializeForm() {
    this.loginform = new FormGroup({
      'email': new FormControl(Validators.required),
      'password': new FormControl(Validators.required)
    })
    console.log(this.loginform)
  }

  register() {
    this.router.navigate(['/signup']);
  }

}
