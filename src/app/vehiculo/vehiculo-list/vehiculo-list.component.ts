import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  vehiculosOrdenados: Array<string> = [];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  /*listarMarcas(vehiculos: Array<Vehiculo>): void {
    let vehiculosOrdenados = [];
    let j = 0;
    for(let i=0; i<vehiculos.length; i++){
      if(vehiculos[i].marca )
      vehiculosOrdenados[j] = vehiculos[i].marca;
    }
    this.vehiculosOrdenados = vehiculosOrdenados;
  }*/

  ngOnInit() {
    this.getVehiculos();
  }
}

