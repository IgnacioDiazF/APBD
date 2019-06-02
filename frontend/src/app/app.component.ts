import { Component } from '@angular/core';

import { Patente } from './models/patente'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patenteArray: Patente[] = [
    {idPatente: 1, cantidadVendida: 5, precioInicial: 100000},
    {idPatente: 2, cantidadVendida: 7, precioInicial: 70000},
    {idPatente: 3, cantidadVendida: 3, precioInicial: 45000},
    {idPatente: 4, cantidadVendida: 4, precioInicial: 300000},
    {idPatente: 5, cantidadVendida: 1, precioInicial: 25000}
  ];

  selectedPatente: Patente = new Patente();

  addOrEdit(){
    if(this.selectedPatente.idPatente === 0){
      this.selectedPatente.idPatente = this.patenteArray.length + 1;
      this.patenteArray.push(this.selectedPatente);
    }
    this.selectedPatente = new Patente();
  }

  openForEdit(patente: Patente){
    this.selectedPatente = patente;
  }
  delete(){
    if(confirm('Estás seguro de eliminar esta Patente?')){
      this.patenteArray = this.patenteArray.filter(x => x != this.selectedPatente);
      this.selectedPatente = new Patente();
    }
  }
}
