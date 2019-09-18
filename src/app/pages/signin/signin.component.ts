import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService, AuthenticationService, UserService } from '../../_services';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loading = false;
  submitted = false;
  constructor(

    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService, private router: Router
  ) {

  }
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.userService.isLoggedIn())
      this.router.navigateByUrl('/home');
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(form : NgForm){
    this.submitted = true;
    this.loading = true;
    this.userService.login(form.value).subscribe(
      res => {
        console.log(res);
        this.userService.setToken(res['token']);
        this.userService.selectedUser = res['currentUser'];
        this.router.navigate(['/home']);
      },
      err => {
        this.serverErrorMessages = err.error.message;
        this.loading = false;
        this.submitted = false;
        this.model.password = '';
      }
    );
  }

}
