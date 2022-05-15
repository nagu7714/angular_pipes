import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { repos } from './repo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "https://api.github.com/";
  user: string = 'nagu7714';

  constructor(private httpC:HttpClient) { }

getRepos(): Observable<any> {

 return this.httpC.get(this.baseURL + 'users/' + this.user + '/repos');
}


}
