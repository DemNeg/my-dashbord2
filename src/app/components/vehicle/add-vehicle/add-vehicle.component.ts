import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Vehicle } from 'src/app/api/vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
  providers: [MessageService]
})
export class AddVehicleComponent implements OnInit {
  selectedState:any;
  selectedType:any;
  selectedFuel:any;
  selectedMeasurement:any;
  selectedTrack:any;
  uploadedFiles: any[] = [];
  valSwitch: boolean = false;
  //maxSize = 1000000;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

    dropdownTypes = [
      { name: 'Type 1', code: 'Option 1' },
      { name: 'Type 2', code: 'Type 2' },
      { name: 'Type 3', code: 'Type 3' }
    ];
    dropdownStates = [
      { name: 'Active', code: 'Active' },
      { name: 'Inactive', code: 'Inactive' },
      { name: 'Sold', code: 'Sold' },
    ];
    FuelTypes = [
      { name: 'Diesel', code: 'Diesel' },
      { name: 'Gasoline', code: 'Gasoline' },
      { name: 'Propane', code: 'Propane' },
      { name: 'Compressed Natural gas', code: 'Compressed Natural gas' },
    ];
    FuelMeasurements = [
      { name: 'Gallons(UK)', code: 'Gallons_UK' },
      { name: 'Gallons(USA)', code: 'Gallons_USA' },
      { name: 'Liters', code: 'Liters' },
    ];
    TracksUsage_As = [
      { name: 'Kilometers', code: 'Kilometers' },
      { name: 'Miles', code: 'Miles' },
      { name: 'Hours', code: 'Hours' },
    ];

  onUpload(event: any) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

}
