import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private Http : HttpClient)  { }

  private apiEndpointUrl = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";

  getUserData()
  {
    return this.Http.get(this.apiEndpointUrl);
  }
}
