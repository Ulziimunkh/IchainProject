import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from '../../_services';
@Component({
  selector: 'app-navigation-temp',
  templateUrl: './navigation-temp.component.html',
  styleUrls: ['./navigation-temp.component.css']
})
export class NavigationTempComponent implements OnInit {

  loggedUser;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
      this.loggedUser = userService.selectedUser;
    }

  ngOnInit() {

  }

  logout() {
    this.userService.deleteToken();
    this.router.navigate(['']);
  }
}
