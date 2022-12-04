import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { HttpClientModule} from '@angular/common/http'
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {DialogModule} from 'primeng/dialog';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path:'' , component:UserComponentComponent }

];

@NgModule({
  declarations: [
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    DividerModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],

})
export class UserDataModule { }
