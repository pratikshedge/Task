import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'frontend-task';


  constructor(private primengConfig: PrimeNGConfig,
    private router: Router) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

}
