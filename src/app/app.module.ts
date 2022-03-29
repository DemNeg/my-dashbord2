import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BadgeModule} from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import {HttpClientModule} from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { AddVehicleComponent } from './components/vehicle/add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './components/vehicle/list-vehicle/list-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuitemComponent,
    TopbarComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    DashbordComponent,
    LoginComponent,
    AddVehicleComponent,
    ListVehicleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BadgeModule,
    AvatarModule,
    HttpClientModule,
    TableModule,
    RippleModule,
    PasswordModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    CalendarModule,
    InputSwitchModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    DialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
