import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../api/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  getVehicle() {
    return this.http.get<any>('assets/demo/data/vehicles.json')
    .toPromise()
    .then(res => res.data as Vehicle[])
    .then(data => data);
}
}
