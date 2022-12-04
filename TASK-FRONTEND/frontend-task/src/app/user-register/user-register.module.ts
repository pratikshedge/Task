import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {CardModule} from 'primeng/card';

const routes : Routes = [
  {path:'' , component:RegisterComponent }

];


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    RouterModule.forChild(routes),
    ButtonModule,
    ToastModule,
    CardModule
  ]
})
export class UserRegisterModule { }
