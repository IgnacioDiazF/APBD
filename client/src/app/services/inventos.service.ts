import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invento } from '../models/Invento';

@Injectable({
  providedIn: 'root'
})
export class InventosService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getInventos(){
    return this.http.get(`${this.API_URI}/inventos`);
  }
  getInvento(id: string){
    return this.http.get(`${this.API_URI}/inventos/${id}`);
  }
  deleteInvento(id: string){
    return this.http.delete(`${this.API_URI}/inventos/${id}`);
  }
  createInvento(invento: Invento){
    return this.http.post(`${this.API_URI}/inventos`, invento);
  }
  updateInvento(id: string|number, updatedInvento: Invento){
    return this.http.put(`${this.API_URI}/inventos/${id}`, updatedInvento);
  }
}
