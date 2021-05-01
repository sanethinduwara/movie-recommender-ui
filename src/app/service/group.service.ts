import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  apiUrl = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient) {
  }

  saveGroup(data: any): any {
    return this.http.post<any>(this.apiUrl + '/group', data);
  }

}
