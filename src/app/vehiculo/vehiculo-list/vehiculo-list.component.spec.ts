/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service'

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [ VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(
        1,
        "VW",
        "Lupo",
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
      ),
      new Vehiculo(
        2,
        "Lamborghini",
        "Murcielago",
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
      ),
      new Vehiculo(
        3,
        "Fiat",
        "Punto",
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  // El test comprueba si funciona la creación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // El test comprueba si la tabla se crea con el numero correcto de filas (En este caso 4 filas => el encabezado más los 3 vehiculos)
  it('should create table correctly', () => {
    let list = fixture.debugElement.queryAll(By.css('tr'));
    expect(list.length).toBe(4);
  });
});
