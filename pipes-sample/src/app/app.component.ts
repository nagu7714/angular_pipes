import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import { repos } from './repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes-sample';
  repos! : repos[];
  pipeArgs:string = 'days ago';

  constructor(private apiS:ApiService){}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos()  {    

    this.apiS.getRepos().subscribe(
     (response) =>{
      console.log('response received')
       this.repos =response;
     }
    )

  }
}
