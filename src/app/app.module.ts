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

@NgModule({
  declarations: [
    AppComponent,
    MenuitemComponent,
    TopbarComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    DashbordComponent,
    LoginComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
