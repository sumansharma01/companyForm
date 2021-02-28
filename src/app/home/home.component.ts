import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersData:any;
  constructor(private usersService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.usersData=this.usersService.userData;
  }

  addUser(){
    this.router.navigate(["/create-user"]);
  }

  delete(id:number){
    this.usersService.userDelete(id);
  }

}
