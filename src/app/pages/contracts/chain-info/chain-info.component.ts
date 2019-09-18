import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Patient} from '../../../../entry/patient';

@Component({
  selector: 'app-chain-info',
  templateUrl: './chain-info.component.html',
  styleUrls: ['./chain-info.component.css']
})
export class ChainInfoComponent implements OnInit {

  result: any;
  result1: any;
  patient:Patient;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.getPatient();
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
 hex2a(hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}
  getPatient() {
    this.http.get('/patientInfo').subscribe(data => {
      console.log('data========>', data);
     this.result = data; 
     this.patient = new Patient();
     this.patient.firstName = (data[0]);
     this.patient.lastName =  data[1];
     this.patient.gender = data[2];
     this.patient.email = data[3];
     this.patient.dob = this.formatDate(new  Date (data[4]));
     this.patient.phoneNumber = Number(data[5]._hex);
     this.patient.address = data[6];
     this.patient.account = data[7];
    
    });
   
   
  }

}
