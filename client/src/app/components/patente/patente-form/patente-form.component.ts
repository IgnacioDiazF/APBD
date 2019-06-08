import { Component, OnInit, HostBinding } from '@angular/core';
import { Patente } from 'src/app/models/Patente';
import { PatentesService } from 'src/app/services/patentes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patente-form',
  templateUrl: './patente-form.component.html',
  styleUrls: ['./patente-form.component.css']
})
export class PatenteFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  patente: any = {
    idPatente: 0,
    cantidadvendida: 0,
    precioinicial: 0
  };

  edit: boolean = false;

  constructor(private patentesService: PatentesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.patentesService.getPatente(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.patente = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }
  guardarPatente(){
    this.patentesService.createPatente(this.patente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/patentes']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
    );
  }

  actualizarPatente(){

    console.log(this.patente);
    this.patentesService.updatePatente(this.patente.idPatente, this.patente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/patentes']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
    );
  }
}
