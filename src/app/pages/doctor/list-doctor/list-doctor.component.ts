import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

  doctors: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute)
  {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
   }

  ngOnInit() {
    this.http.get('/doctor').subscribe(data => {
      console.log('List of doctors--->', data);
      this.doctors = data;
    });
  }
  deleteDoctor(id) {
    this.http.delete('/doctor/'+id)
      .subscribe(res => {

        }, (err) => {
          console.log(err);
        }
      );
      this.router.navigate(['/doctorList'], {
        queryParams: {refresh: new Date().getTime()}
     });
  }

}
