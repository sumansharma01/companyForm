import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user-card/user-card.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'user',
    component: UserCardComponent
  },
  {
    path:'edit-user',
    component: EditUserComponent
  },
  {
    path:'create-user',
    component: CreateUserComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
