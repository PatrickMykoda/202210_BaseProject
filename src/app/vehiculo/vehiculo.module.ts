import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { MarcasListComponent } from './marcas-list/marcas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VehiculoListComponent, MarcasListComponent],
  declarations: [VehiculoListComponent, MarcasListComponent]
})
export class VehiculoModule { }
