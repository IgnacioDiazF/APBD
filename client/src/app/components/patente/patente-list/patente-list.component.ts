import { Component, OnInit, HostBinding } from '@angular/core';
import { PatentesService } from '../../../services/patentes.service'

@Component({
  selector: 'app-patente-list',
  templateUrl: './patente-list.component.html',
  styleUrls: ['./patente-list.component.css']
})
export class PatenteListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  patentes: any = [];
  constructor(private patentesService: PatentesService) { }

  ngOnInit() {
    this.obtenerPatentes();
  }
  obtenerPatentes(){
    this.patentesService.getPatentes().subscribe(
      res => {
        this.patentes = res;
      },
      err => console.error(err)
    );
  }
  eliminarPatente(id: string){
    this.patentesService.deletePatente(id)
    .subscribe(
      res =>{
        console.log(res);
        this.obtenerPatentes();
      },
      err => console.error(err)
    );
  }

}
