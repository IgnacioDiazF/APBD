import { Component, OnInit, HostBinding } from '@angular/core';
import { InventosService } from '../../../services/inventos.service'

@Component({
  selector: 'app-invento-list',
  templateUrl: './invento-list.component.html',
  styleUrls: ['./invento-list.component.css']
})
export class InventoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  inventos: any = [];

  constructor(private inventosService: InventosService) { }

  ngOnInit() {
    this.obtenerInventos();
  }

  obtenerInventos(){
    this.inventosService.getInventos().subscribe(
      res => {
        this.inventos = res;
      },
      err => console.error(err)
    );
  }

  eliminarInvento(id: string){
    this.inventosService.deleteInvento(id)
    .subscribe(
      res =>{
        console.log(res);
        this.obtenerInventos();
      },
      err => console.error(err)
    );
  }
}
