import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '../../_services';
import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user = {};
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private http: HttpClient
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/home');
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(JSON.stringify(this.registerForm.value));


    // stop here if form is invalid
    if (this.registerForm.invalid) {

      alert('User form is not valid!!');
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/sign-in']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });

  }

}
