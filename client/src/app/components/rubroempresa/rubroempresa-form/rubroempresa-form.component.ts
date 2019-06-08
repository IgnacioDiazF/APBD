import { Component, OnInit, HostBinding } from '@angular/core';
import { RubroempresasService } from 'src/app/services/rubroempresas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rubroempresa-form',
  templateUrl: './rubroempresa-form.component.html',
  styleUrls: ['./rubroempresa-form.component.css']
})
export class RubroempresaFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  rubroempresa: any = {
    idrubroempresa: 0,
    nombrerubroempresa: ''
  }

  edit:boolean = false;
  constructor(private rubroempresasService: RubroempresasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.rubroempresasService.getRubroEmpresa(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.rubroempresa = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  guardarRubroEmpresa(){
    this.rubroempresasService.createRubroEmpresas(this.rubroempresa).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/rubroempresas']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
    );
    }

    actualizarRubroEmpresa(){
      console.log(this.rubroempresa);

      this.rubroempresasService.updateRubroEmpresas(this.rubroempresa.idrubroempresa, this.rubroempresa)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/rubroempresas']);
        },
        err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
      );
    }
  }

