import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/api/appconfig';
import { Product } from 'src/app/api/product';
import { AppConfigService } from 'src/app/service/app-config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  items: MenuItem[] = [];

    products!: Product[];

    subscription: Subscription | undefined;

    config: AppConfig | undefined;

    constructor(private productService: ProductService, public configService: AppConfigService) {}

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });
        this.productService.getProductsSmall().then(data => this.products = data);
          
        this.items = [
            {label: 'Add New', icon: 'pi pi-fw pi-plus'},
            {label: 'Remove', icon: 'pi pi-fw pi-minus'}
        ];

    }
}
