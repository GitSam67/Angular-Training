import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class InventoryModule { }
