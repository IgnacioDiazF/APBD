import { Component, OnInit, HostBinding } from '@angular/core';
import { TipoinventosService } from 'src/app/services/tipoinventos.service';

@Component({
  selector: 'app-tipoinvento-list',
  templateUrl: './tipoinvento-list.component.html',
  styleUrls: ['./tipoinvento-list.component.css']
})
export class TipoinventoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  tipoinventos:any = [];
  constructor(private tipoinventosService: TipoinventosService) { }

  ngOnInit() {
    this.obtenerTipoInventos();
  }
  obtenerTipoInventos(){
    this.tipoinventosService.getTipoInventos()
    .subscribe(
      res => {
        this.tipoinventos = res;
      },  
      err => console.error(err)
    );
  }
  eliminarTipoInvento(id:string){
    this.tipoinventosService.deleteTipoInvento(id)
    .subscribe(
      res => {
        console.log(res);
        this.obtenerTipoInventos();
      },
      err => console.error(err)
    );
  }
}
