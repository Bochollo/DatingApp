import { HttpClient } from '@angular/common/http';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: any;
  title = 'The New Dating App';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('PROTO: OnInit');
    this.getUsers();
  }

  getUsers() {
    console.log('getUsers: START');
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
    console.log('SUCCESS');
    this.users = response;

    }, error => {
      console.log('ERROR:');
      console.log(AstMemoryEfficientTransformer);
    })


  }



}
