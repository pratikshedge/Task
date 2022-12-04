import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/service/register.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent implements OnInit {
  registerFlag: boolean = false;
  registerUserData: any[] = [];
  showRegData:boolean = false;
  registerColumnGridList: {field:string, header:string} []=[];
  WelcomeText: string = "Welcome to our Weather Forecast Page"
    constructor(
    public router: Router,
    private registerService: RegisterService
  ) {}
  ngOnInit(): void {
    this.registerFlag = this.registerService.getFlag();
    if (this.registerFlag) {
      this.registerService.fetchAllUsers().subscribe((data: any) => {
        this.registerUserData = data;
      });
    }

    this.registerColumnGridList = [
      { field: 'Email', header:'Email'},
      { field: 'UserName', header:'UserName'}
    ]
  }

  registerForm() {
    this.router.navigateByUrl('/register');
  }
  showData() {
    this.router.navigateByUrl('/userdata');
  }
  showRegisterdUsers()
  {
   this.showRegData = true;
  }
}
