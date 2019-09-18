import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  orgainzation = {};
  nextId = '0000';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
   
  }

   generateOrgId(){
     let id = '0000';
     this.http.get('/org/count')
      .subscribe(res => {
        console.log('total number of Org--->', res);
        console.log('-->', parseInt(res.toString())+1);
        let intId = (parseInt(res.toString())+1);
        id = id.concat(intId.toString());
        this.nextId = id.substring(id.length-4, id.length);
      }, (err) => {
        console.log(err);
      }
      );
    return id;
  }

  ngOnInit() {
    this.generateOrgId();
    this.registerForm = this.formBuilder.group({
     
      orgId: [{value:this.nextId , disabled: true} ],
      name: ['', Validators.required],
      nationality: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.registerForm.value));


    // stop here if form is invalid
    if (this.registerForm.invalid) {

      alert('orgainzation form is not valid!!');
      return;
    }
    this.loading = true;
    let org = this.registerForm.getRawValue();
    org.orgId = this.nextId;
    this.http.post('/org', org)
      .subscribe(res => {
        console.log('save--->', res);
        this.router.navigate(['/organizations']);
        this.loading = false;
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }

}
