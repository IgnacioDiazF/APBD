import { Component, OnInit, HostBinding } from '@angular/core';
import { TipoInvento } from 'src/app/models/TipoInvento';
import { TipoinventosService } from 'src/app/services/tipoinventos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipoinvento-form',
  templateUrl: './tipoinvento-form.component.html',
  styleUrls: ['./tipoinvento-form.component.css']
})
export class TipoinventoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  tipoinvento: any = {
    idtipoinvento: 0,
    nombretipoinvento: ''
  }
  edit:boolean = false;
  constructor(private tipoinventosService: TipoinventosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.tipoinventosService.getTipoInvento(params.id)
      .subscribe(
        res=> {
          console.log(res);
          this.tipoinvento = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  guardarTipoInvento(){
    this.tipoinventosService.createTipoInvento(this.tipoinvento)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tipoinventos']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
    );
  }

  actualizarTipoInvento(){
    console.log(this.tipoinvento);

    this.tipoinventosService.updateTipoInvento(this.tipoinvento.idtipoinvento, this.tipoinvento)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tipoinventos']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
    );
  }

}
