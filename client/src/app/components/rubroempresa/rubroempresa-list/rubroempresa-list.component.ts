import { Component, OnInit, HostBinding } from '@angular/core';
import { RubroempresasService } from 'src/app/services/rubroempresas.service';

@Component({
  selector: 'app-rubroempresa-list',
  templateUrl: './rubroempresa-list.component.html',
  styleUrls: ['./rubroempresa-list.component.css']
})
export class RubroempresaListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  rubroempresas:any = [];
  constructor(private rubroempresasService: RubroempresasService) { }

  ngOnInit() {
    this.obtenerRubroEmpresas();
  }
  obtenerRubroEmpresas(){
    this.rubroempresasService.getRubroEmpresas()
    .subscribe(
      res => {
        this.rubroempresas = res;
      },
      err => console.error(err)
    );
  }

  eliminarRubroEmpresa(id: string){
    this.rubroempresasService.deleteRubroEmpresas(id)
    .subscribe(
      res => {
        console.log(res);
        this.obtenerRubroEmpresas();
      },
      err => console.error(err)
    );
  }
}
