import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import {AppConfig} from '../api/appconfig'
import { AppComponent } from '../app.component';
import { AppConfigService } from '../service/app-config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [
        trigger('submenu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public menuInactiveDesktop: boolean | undefined;   // true/false ==> menuDesktop(inactive-active)

  public menuActiveMobile: boolean | undefined;      // true/false ==> menuMobile(active-inactive)

  public overlayMenuActive: boolean | undefined;     // true/false ==> overlayMenu (Active-inactive)

  public staticMenuInactive: boolean = false;        // true/false ==> staticMenu(Inactive-active)

  public profileActive: boolean | undefined;         // true/false ==> profile Active(active-Inactive)

  public topMenuActive: boolean | undefined;         // true/false ==> topMenu Active(active-Inactive)

  public topMenuLeaving: boolean | undefined;        // true/false ==> topMenuLeaving(leaving-no leaving)

  public theme: string | undefined;                  // Specified theme

  documentClickListener!: () => void;                  

  menuClick: boolean | undefined;                    // true/false  ==> menuClick(true-false)

  topMenuButtonClick: boolean | undefined;           // true/false  ==> topMenu Button Click(true-false)

  configActive: boolean | undefined;                 // true/false ==> config Active (true,false)

  configClick: boolean | undefined;                  // true/false ==> config Click (true,false)

  config: AppConfig | undefined;                     // to setup the app configuration (input style, theme,dark,riple)     

  subscription: Subscription | undefined;            // used to update app via the service           
  
  constructor(public renderer: Renderer2, public app: AppComponent, public appConfigService: AppConfigService) { }

  ngOnInit() {
      this.config = this.appConfigService.config;
      this.subscription = this.appConfigService.configUpdate$.subscribe(config => this.config = config);
  }

  ngAfterViewInit() {
      // hides the overlay menu and top menu if outside is clicked
      this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
          if (!this.isDesktop()) {
              if (!this.menuClick) {
                  this.menuActiveMobile = false;
              }

              if (!this.topMenuButtonClick) {
                  this.hideTopMenu();
              }
          }
          else {
              if (!this.menuClick && this.isOverlay()) {
                  this.menuInactiveDesktop = true;
              }
              if (!this.menuClick){
                  this.overlayMenuActive = false;
              }
          }

          if (this.configActive && !this.configClick) {
              this.configActive = false;
          }

          this.configClick = false;
          this.menuClick = false;
          this.topMenuButtonClick = false;
      });
  }

  toggleMenu(event: Event) {
      this.menuClick = true;

      if (this.isDesktop()) {
          if (this.app.menuMode === 'overlay') {
              if(this.menuActiveMobile === true) {
                  this.overlayMenuActive = true;
              }

              this.overlayMenuActive = !this.overlayMenuActive;
              this.menuActiveMobile = false;
          }
          else if (this.app.menuMode === 'static') {
              this.staticMenuInactive = !this.staticMenuInactive;
          }
      }
      else {
          this.menuActiveMobile = !this.menuActiveMobile;
          this.topMenuActive = false;
      }

      event.preventDefault();
  }

  toggleProfile(event: Event) {
      this.profileActive = !this.profileActive;
      event.preventDefault();
  }

  toggleTopMenu(event: Event) {
      this.topMenuButtonClick = true;
      this.menuActiveMobile = false;

      if (this.topMenuActive) {
          this.hideTopMenu();
      } else {
          this.topMenuActive = true;
      }

      event.preventDefault();
  }

  hideTopMenu() {
      this.topMenuLeaving = true;
      setTimeout(() => {
          this.topMenuActive = false;
          this.topMenuLeaving = false;
      }, 1);
  }

  onMenuClick() {
      this.menuClick = true;
  }

  onConfigClick() {
      this.configClick = true;
  }

  isStatic() {
      return this.app.menuMode === 'static';
  }

  isOverlay() {
      return this.app.menuMode === 'overlay';
  }

  isDesktop() {
      return window.innerWidth > 992;
  }

  isMobile(){
      return window.innerWidth < 1024;
  }

  onSearchClick() {
      this.topMenuButtonClick = true;
  }

  ngOnDestroy() {
      if (this.documentClickListener) {
          this.documentClickListener();
      }


      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }


}
