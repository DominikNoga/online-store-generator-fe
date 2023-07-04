import { Component, OnInit } from '@angular/core';
import { UserTypes } from 'src/app/enums/user.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  UserTypes = UserTypes
  userType = UserTypes.ADMIN;

  constructor() { }

  ngOnInit(): void {
  }

}
