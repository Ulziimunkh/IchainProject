import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userDetails = this.userService.selectedUser;

  }



  logout() {
    this.userService.deleteToken();
    this.router.navigate(['']);
  }
}
