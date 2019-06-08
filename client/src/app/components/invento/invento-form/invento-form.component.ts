import { Component, OnInit, HostBinding } from '@angular/core';
import { InventosService } from 'src/app/services/inventos.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-invento-form',
  templateUrl: './invento-form.component.html',
  styleUrls: ['./invento-form.component.css']
})
export class InventoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  invento: any = {
    idinvento: 0,
    idpatente: 0,
    idtipoinvento: 0,
    nombreinvento: ''
  };


  edit: boolean = false;

  constructor(private inventosService: InventosService, private router: Router, private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.inventosService.getInvento(params.id)
      .subscribe(
        res => {
          this.invento = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  guardarInvento(){
    this.inventosService.createInvento(this.invento)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/inventos']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
        
      
    );
  }

  actualizarInvento(){
    console.log(this.invento);
    this.inventosService.updateInvento(this.invento.idinvento, this.invento)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/inventos']);
      },
      err => alert(`Error: ${err.status}\nError al insertar, intente nuevamente`)
    );
  }

}
