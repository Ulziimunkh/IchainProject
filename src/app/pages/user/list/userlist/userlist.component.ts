import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService} from '../../../../_services';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,   private alertService: AlertService)
  {
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
    }
   }

  ngOnInit() {
    this.http.get('/user').subscribe(data => {
      console.log('List of users--->', data);
      this.users = data;
    });
  }
  deleteUser(id) {
    this.http.delete('/user/'+id)
      .subscribe(res => {
        this.alertService.success('Delete successful', true);
        }, (err) => {
          console.log(err);
        }
      );
      this.router.navigate(['/userList'], {
        queryParams: {refresh: new Date().getTime()}
     });
  }


}
