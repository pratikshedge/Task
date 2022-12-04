import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/service/register.service';
import { ToastMessageHandlerService } from 'src/app/shared/service/toast-notification.service';
import { RegisterConig } from './register.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  registerConfig!: RegisterConig;
  submitted: boolean = false;
  registerFlag:boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _toastMessageHandlerService: ToastMessageHandlerService,
    private registerService: RegisterService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.registerFlag = false;
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });

    this.registerConfig = new RegisterConig();
  }

  onsubmit() {
    if (this.form.status == 'INVALID') {
      this.submitted = true;
    } else if (
      this.form.controls['password'].value ==
      this.form.controls['confirmpassword'].value
    ) {
      let username = this.form.controls['username'].value;
      let password = this.form.controls['password'].value;
      let address = this.form.controls['address'].value;
      let mobile = this.form.controls['mobile'].value;
      let email = this.form.controls['email'].value;
      let req: any = {
        userName: username,
        password: password,
        address: address,
        mobile: mobile,
        email: email,
      };
      console.log(req);
      this.registerService.registerUser(req).subscribe((data: any) => {
        console.log(data);
        if (data.status == 'success')
        {
          this._toastMessageHandlerService.showSuccessMsg(
            'New User has been registered'
          );
          this.registerFlag = true;
          this.registerService.setFlag(this.registerFlag);
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3000);

        }

        else
          this._toastMessageHandlerService.showErrorMsg('Registration Failed');
      });
    } else {
      this._toastMessageHandlerService.showWarningMsg(
        'Password and ConfirmPassword should match'
      );
    }
  }

  goBack()
  {
    this.router.navigateByUrl('/');
  }
}
