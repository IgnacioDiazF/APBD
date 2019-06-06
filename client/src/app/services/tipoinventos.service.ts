import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoInvento } from '../models/TipoInvento';

@Injectable({
  providedIn: 'root'
})
export class TipoinventosService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getTipoInventos(){
    return this.http.get(`${this.API_URI}/tipoinventos`);
  }
  getTipoInvento(id: string){
    return this.http.get(`${this.API_URI}/tipoinventos/${id}`);
  }
  deleteTipoInvento(id: string){
    return this.http.delete(`${this.API_URI}/tipoinventos/${id}`);
  }
  createTipoInvento(tipoinvento: TipoInvento){
    return this.http.post(`${this.API_URI}/tipoinventos`, tipoinvento);
  }
  updateTipoInvento(id: string|number, updatedTipoInvento: TipoInvento){
    return this.http.put(`${this.API_URI}/tipoinventos/${id}`, updatedTipoInvento);
  }

}
