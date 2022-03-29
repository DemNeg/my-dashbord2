export interface Vehicle {
    id?: string;
    code?: string;
    vehicleType?: string;
    registrationNumber?: number; 
    vehicleName?: string;
    engineNumber?: number;
    model?: string;
    chassisNumber?: number;
    yearOfManufacturer?:Date;
    fuelType?: string;
    image?: string;
    fuelMeasurements?:number;
    state?: string;
    tracksUsageAs?:string;
    auxiliaryMeter?:boolean;
    insuranceNumber?: number;
    insuranceStartDate?: Date;
    insuranceExpirationDate?: Date;
}
