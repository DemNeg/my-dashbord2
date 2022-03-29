import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Vehicle } from 'src/app/api/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss'],
  providers: [MessageService]
})
export class ListVehicleComponent implements OnInit {

  vehicles: Vehicle[]= [];

  vehicle!: Vehicle;

  vehicleDialog: boolean = false;

  selectedVehicles: Vehicle[] = [];

  deleteVehicleDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  cols: any[] = [];

  constructor(private vehicleService:VehicleService, private router:Router,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicle().then(data => this.vehicles = data);

    // To export table of vehicles
    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'vehicleName', header: 'Vehicle Name'},
      {field: 'model', header: 'Model'},
      {field: 'fuelType', header: 'Fuel Type'},
      {field: 'yearOfManufacturer', header: 'Year of Registration'},
      {field: 'registrationNumber', header: 'Registration Number'},
      {field: 'state', header: 'State'}
  ];

  }

  openNew(){
    this.vehicle = {};
    this.router.navigateByUrl("/addVehicle")
  }

  deleteSelectedProducts(){
    this.deleteProductsDialog = true;
  }

  editVehicle(vehicle: Vehicle){
    this.vehicle = {...vehicle};
    this.vehicleDialog = true;
  }

  deleteVehicle(vehicle: Vehicle){
    this.deleteVehicleDialog= true;
    this.vehicle = {...vehicle};
  }

  confirmDelete(){
    this.deleteVehicleDialog= false;
    this.vehicles = this.vehicles.filter(val => val.id !== this.vehicle.id);
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Vehicle Deleted', life: 3000});
    this.vehicle = {};
  }

  confirmDeleteSelected(){
    this.deleteProductsDialog = false;
    this.vehicles = this.vehicles.filter(val => !this.selectedVehicles.includes(val));
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Vehicle(e)s Deleted', life: 3000});
    this.selectedVehicles= [];
  }

}
