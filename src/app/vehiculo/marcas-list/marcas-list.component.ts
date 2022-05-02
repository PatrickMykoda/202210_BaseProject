import { Component, OnInit } from '@angular/core';
import { MarcaListElement } from '../marca-list-element';
import { VehiculoListComponent } from '../vehiculo-list/vehiculo-list.component';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.css']
})
export class MarcasListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  marcasList: Array<MarcaListElement> = [];

  constructor(private vehiculoService: VehiculoService) { }

  listarMarcas(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;

      this.vehiculos.forEach(vehiculo => {
        let marca = vehiculo.marca;
        let i = 0;
        let l = this.marcasList.length;
        let encontrado = false;
        while(i<l){
          if(this.marcasList[i].marca == marca){
            this.marcasList[i].numeroVehiculos += 1;
            encontrado = true;
          }
          i++;
        }
        if(encontrado==false){
          this.marcasList[i] = new MarcaListElement(
            marca,
            1
          )
        }
      });
  });
}


  ngOnInit() {
    this.listarMarcas();
  }
}
