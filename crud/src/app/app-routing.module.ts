import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HeaderComponent } from './pages/header/header.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {path:'',component:HeaderComponent,children:[
    {path:'',component:UserDetailsComponent},
    {path:'new',component:EditUserComponent},
    {path:':id',component:EditUserComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
