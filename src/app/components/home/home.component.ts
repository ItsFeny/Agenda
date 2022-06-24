import { Component, OnInit } from '@angular/core';
import  jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }


  ngOnInit(): void 
  {
    this.DecodedToken();
  }


  public DecodedToken()
  {
    let token: any = sessionStorage.getItem('token');
    let decoded = jwtDecode(token)!; 
    console.log(decoded);
  }


}
