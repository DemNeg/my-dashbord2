import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items:[
            {label: 'Dashboard',icon: 'pi pi-fw pi-palette', routerLink: ['/']}
        ]
      },
      
      {
          label: 'Vehicles',
          items: [
              {label: 'Add Vehicles', icon: 'pi pi-fw pi-plus', routerLink: ['/addVehicle']},
              {label: 'Vehicles', icon: 'pi pi pi-fw pi-car', routerLink: ['/uikit/input']},
              {label: 'Assignment New Vehicles', icon: 'pi pi pi-fw pi-plus-circle', routerLink: ['/uikit/floatlabel']},
              {label: 'Assignment history', icon: 'pi pi-fw pi pi-fw pi-history', routerLink: ['/uikit/invalidstate']},
              
          ]
      },
      {
          label:'Contacts',
          items:[
              {label: 'Add User', icon: 'pi pi-fw pi-user', routerLink: ['/blocks']},
              {label: 'Users', icon: 'pi pi-fw pi-users', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
              {label: 'Add Vendor', icon: 'pi pi-fw pi-user', routerLink: ['/blocks']},
              {label: 'Vendors', icon: 'pi pi-fw pi-users', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
          ]
      },
      {label:'Masters',
          items:[
              {
                label: 'Broker Master ',icon: 'pi  pi-box',
                items:[
                    {label:'Add New Broker', icon: 'pi pi-user-plus'},
                    {label:'Brokers', icon: 'pi pi-users'},
                ]

              },
              {
                label: 'City Master',icon: 'pi  pi-filter',
                items:[
                    {label:'Add New City', icon: 'pi pi-plus-circle'},
                    {label:'Cities', icon: 'pi pi-list'},
                ]
              }
          ]
      },
  ];
  }

    onKeydown(event: KeyboardEvent) {
      const nodeElement = (<HTMLDivElement> event.target);
      if (event.code === 'Enter' || event.code === 'Space') {
          nodeElement.click();
          event.preventDefault();
      }
  }

}
