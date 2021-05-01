import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient) {
  }

  getAllUsers(): any {
    return this.http.get<any>(this.apiUrl + '/user');
  }

}
