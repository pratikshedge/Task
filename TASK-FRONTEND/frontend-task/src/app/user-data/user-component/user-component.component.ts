import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  constructor( private userService : UserService,
    private router:Router) {}

  users: any[] = [];
  headers: any[] = [];
  forcastData: any[] = [];
  cols:any[] = [];
  columns:any[]=[];
  productData:any[] = [];
  pageTitle: string ='';
  Product: string ='';
  dateValue!: Date;
  dateValueUpto!:Date;
  productname:string = '';
  init:string='';
  showData:boolean = false;
  ngOnInit(): void {
    this.userService.getUserData().subscribe((data:any) =>
    {
      this.users = data;
      this.productname = data.product;
      this.init = data.init;
      this.forcastData = data.dataseries;
      this.headers = Object.keys(this.users);
      this.columns = Object.keys(this.forcastData[0]);
      console.log(data);
    }
    )
    this.cols = [
     { field: this.headers[0] , header: 'product'},
     { field: this.headers[1] , header: 'init' }

    ]

    this.pageTitle = "Weather Forecast Data";
  }

  proceed()
  {
   this.showData = true;
  }
  goBack()
  {
    this.router.navigateByUrl('/');
  }






}
