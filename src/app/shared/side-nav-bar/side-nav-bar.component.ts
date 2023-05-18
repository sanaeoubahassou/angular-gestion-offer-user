import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  logo:string = "assets/images/logo/logo-total-energie.png";


  constructor() { }

  ngOnInit(): void {
  }

}
