import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  items: MenuItem[] = [];

  constructor(public appMain: MainComponent) { }


}
