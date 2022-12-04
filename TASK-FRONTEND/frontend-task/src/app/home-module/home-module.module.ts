import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DividerModule } from "primeng/divider";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';

import {CardModule} from 'primeng/card';

const routes : Routes = [
  {path:'' , component:HomeComponentComponent }

];
@NgModule({
  declarations: [
    HomeComponentComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DialogModule,
    TableModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModuleModule { }
