import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IAddress } from '../shared/Interfaces/address';
import { IUser } from '../shared/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // The base URL of the API, obtained from the environment file
  baseUrl = environment.apiUrl;

  // A ReplaySubject that emits the current user
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  // Inject the HttpClient and Router services into the constructor
  constructor(private http: HttpClient, private router: Router) { }

  // A method to load the current user based on their token
  loadCurrentUser(token: string) {
    // If the token is null, emit a null value from the currentUserSource and return an observable of null
    if (token === null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    // Create a new HttpHeaders object and set the Authorization header with the token
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    // Make an HTTP GET request to the account endpoint with the headers object
    return this.http.get(this.baseUrl + 'account', { headers }).pipe(
      // Map the response to a user object and emit it from the currentUserSource
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  // A method to log in a user
  login(values: any) {
    // Make an HTTP POST request to the login endpoint with the login form data
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      // Map the response to a user object and emit it from the currentUserSource
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  // A method to register a new user
  register(values: any) {
    // Make an HTTP POST request to the register endpoint with the registration form data
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      // Map the response to a user object and emit it from the currentUserSource
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  // A method to log out the current user
  logout() {
    // Remove the token from local storage, emit a null value from the currentUserSource, and navigate to the home page
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  // A method to check if an email already exists in the database
  checkEmailExists(email: string) {
    // Make an HTTP GET request to the emailexists endpoint with the email parameter
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }

  // A method to get the current user's address
  getUserAddress() {
    // Make an HTTP GET request to the address endpoint and expect an IAddress object in the response
    return this.http.get<IAddress>(this.baseUrl + 'account/address');
  }

   // Sends a PUT request to the 'account/address' endpoint, passing the address parameter as the request body.
  updateUserAddress(address: IAddress) {
    return this.http.put<IAddress>(this.baseUrl + 'account/address', address);
  }

}
