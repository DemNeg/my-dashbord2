import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { AddVehicleComponent } from './components/vehicle/add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './components/vehicle/list-vehicle/list-vehicle.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',component:MainComponent,
    children:[
      {path:'',component:DashbordComponent},
      {path:'addVehicle',component:AddVehicleComponent},
      {path:'listVehicles',component:ListVehicleComponent}
      
      
    ]
  },
  {path:'login',component:LoginComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
