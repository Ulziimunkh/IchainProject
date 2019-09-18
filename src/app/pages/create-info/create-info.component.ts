import { Component, OnInit } from '@angular/core';
import {Patient} from '../../../entry/patient';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'; 
import {UtilService} from '../../../../services/util.service';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.css'],
  providers: [DatePipe],
})
export class CreateInfoComponent implements OnInit {
  todaydate;
  patientForm;
  constructor(private http: HttpClient, private datepipe:DatePipe,  private router:Router, private formBuilder: FormBuilder, private utils : UtilService) { }  

  genders = ['- choose', 'Male', 'Female', 'Others'];
  submitted = false;

  ngOnInit() {
    //this.todaydate = this.utils.currentDate();
    this.http.get('/patientInfo').subscribe(data => {
      
      this.patientForm = this.formBuilder.group({
        id:[null],
        firstName: [ data[0], Validators.required],
        lastName: [data[1], Validators.required],
        email: [data[3], Validators.required],
        phoneNumber: Number(data[5]._hex),
        gender: data[2],
        dob: [ this.datepipe.transform(data[4], 'yyyy-MM-dd'), Validators.required],
        address: data[6],
      });
    
    });
    
  }
  onSubmit() {
    console.log(JSON.stringify(this.patientForm.value));
    if(this.patientForm.valid){
      this.http.post('/patientInfo', JSON.stringify(this.patientForm.value))
      .subscribe(res => {
          console.log('this form uploading---->');
            this.router.navigate(['/chainInfo']);
          }, (err) => {
            console.log(err);
          }
        );
     
    } else {
      alert('User form is not valid!!')
    }
      
    }
}
