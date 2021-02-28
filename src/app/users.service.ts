import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData=[
    {
      id:1,
      name:"Suman Sharma",
      age:23,
      mail:"suman.sharma0331@gmail.com",
      password:"hellosuman",
      confirmPassword:"hellosuman"
    },
    {
      id:2,
      name:"Prasansha Sharma",
      age:21,
      mail:"prasansha.sharma0331@gmail.com",
      password:"helloprasansha",
      confirmPassword:"helloprasansha"
    },
    {
      id:3,
      name:"Risu Sharma",
      age:22,
      mail:"risu.sharma0331@gmail.com",
      password:"hellorisu",
      confirmPassword:"hellorisu"
    },
    {
      id:4,
      name:"Pujan Sharma",
      age:24,
      mail:"Pujan.sharma0331@gmail.com",
      password:"hellopujan",
      confirmPassword:"hellopujan"
    }
  ]
  
  constructor() { }

  userDelete(id:number){
    let index=0;
    for(let i=0;i<this.userData.length;i++){
      if(id===this.userData[i].id)
        index=i;
    }
    this.userData.splice(index,1);

  }
}
