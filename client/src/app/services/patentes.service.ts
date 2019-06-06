import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patente } from '../models/Patente';

@Injectable({
  providedIn: 'root'
})
export class PatentesService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getPatentes(){
    return this.http.get(`${this.API_URI}/patentes`);
  }
  getPatente(id: string){
    return this.http.get(`${this.API_URI}/patentes/${id}`);
  }
  deletePatente(id: string){
    return this.http.delete(`${this.API_URI}/patentes/${id}`);
  }
  createPatente(patente: Patente){
    return this.http.post(`${this.API_URI}/patentes`, patente);
  }
  updatePatente(id: string|number, updatedPatente: Patente){
    return this.http.put(`${this.API_URI}/patentes/${id}`, updatedPatente);
  }
}
