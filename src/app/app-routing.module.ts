import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',component:MainComponent,
    children:[
      {path:'',component:DashbordComponent},
      
      
    ]
  },
  {path:'login',component:LoginComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
