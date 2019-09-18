import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user.model';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.get('/user/login/' + email)
        .pipe(map(data => {
          let tmp: User;
          tmp = data;
          // login successful if there's a jwt token in the response
          console.log('login-->' + tmp);
          if (data){
            let user = new User({
             firstName: tmp.firstName,
             lastName: tmp.lastName,
              email: tmp.email,
              hash: tmp.hash,
              salt: tmp.salt
            });
            console.log('pass:' + password);
            console.log('pass valid:' + user.validPassword(password));
            if(user.validPassword(password)){
              console.log('login successfully');
              this.currentUserSubject.next(user);
              return user;
            }else{
              console.log('Email or password is wrong');
            }
            // store user details and jwt token in local storage to keep user logged in between page refreshes
              //localStorage.setItem('currentUser', JSON.stringify(user));
          }else{
            console.log('user not found');
          }
          return null;
      }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
