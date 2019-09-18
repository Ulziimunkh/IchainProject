import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: "app-register-doctor",
  templateUrl: "./register-doctor.component.html",
  styleUrls: ["./register-doctor.component.css"]
})
export class RegisterDoctorComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  organizations = {};
  specialist =['Allergist', 'Anesthesiologist', 'Cardiologist', 'Chiropractor', 'Dentist', 'Dermatologist', 'Radiologist', 'Dermatologists', 'Gastroenterologists'];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      specialistId: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      organization: ['', Validators.required]
    });
    this.http.get("/org").subscribe(data => {
      //this.organizations = data.json();
      this.organizations = data;
    });
    console.log("OnInit org");
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log(JSON.stringify(this.registerForm.value));

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert("Doctor form is not valid!!");
      return;
    }
    this.loading = true;
    this.http.post("/doctor", this.registerForm.value).subscribe(
      res => {
        console.log("save doctor--->", res);
        this.router.navigate(["/doctorList"]);
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
