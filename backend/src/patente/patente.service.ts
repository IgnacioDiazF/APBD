import { Injectable } from '@nestjs/common';
import { Patente } from './interfaces/Patente';
@Injectable()
export class PatenteService {
    patente: Patente[] = [
        {
            idPatente: 1,
            cantidadVendida: 5,
            precioInicial: 10000
        },
        {
            idPatente: 2,
            cantidadVendida: 15,
            precioInicial: 60000
        },
        {
            idPatente: 3,
            cantidadVendida: 30,
            precioInicial: 74000
        }
    ];

    getPatentes(): Patente[]{
        return this.patente;
    }

    getPatente(id): Patente{
        return this.patente.find(patente => patente.idPatente === id);
    }
}
