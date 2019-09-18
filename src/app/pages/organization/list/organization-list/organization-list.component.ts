import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  orgs: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) 
  {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
   }

  ngOnInit() {
    this.http.get('/org').subscribe(data => {
      console.log('List of Orgs--->', data);
      this.orgs = data;
    });
  }
  deleteOrg(id) {
    this.http.delete('/org/'+id)
      .subscribe(res => {
        
        }, (err) => {
          console.log(err);
        }
      );
      this.router.navigate(['/organizations'], {
        queryParams: {refresh: new Date().getTime()}
     });
  }
}
