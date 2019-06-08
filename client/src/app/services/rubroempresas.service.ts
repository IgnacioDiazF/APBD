import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rubroempresa } from '../models/Rubroempresa';

@Injectable({
  providedIn: 'root'
})
export class RubroempresasService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getRubroEmpresas(){
    return this.http.get(`${this.API_URI}/rubroempresas`);
  }
  
  getRubroEmpresa(id: string){
    return this.http.get(`${this.API_URI}/rubroempresas/${id}`);
  }
  deleteRubroEmpresas(id: string){
    return this.http.delete(`${this.API_URI}/rubroempresas/${id}`);
  }
  createRubroEmpresas(rubroempresa: Rubroempresa){
    return this.http.post(`${this.API_URI}/rubroempresas`, rubroempresa);
  }
  updateRubroEmpresas(id: string|number, updatedRubroEmpresa: Rubroempresa){
    return this.http.put(`${this.API_URI}/rubroempresas/${id}`, updatedRubroEmpresa);
  }

}
