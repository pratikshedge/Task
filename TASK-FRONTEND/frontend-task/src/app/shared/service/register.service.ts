import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private Http : HttpClient)  { }

   userRegisterFlag:boolean = false;

   setFlag(data:any)
   {
   this.userRegisterFlag = data;
   }
    getFlag()
    {
      return this.userRegisterFlag;
    }

  private resourceUrl = 'http://localhost:8888/user/register'
  private resourceFetch ='http://localhost:8888/user/all'
  registerUser(parameters:any):Observable<any>
  {
    return this.Http.post(this.resourceUrl,parameters);
  }

  fetchAllUsers()
  {
    return this.Http.get(this.resourceFetch);
  }
}
