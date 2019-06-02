import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreatePatenteDto } from './dto/create-patente.dto';
import { PatenteService } from './patente.service';
@Controller('patente')
export class PatenteController {

    constructor(private patenteService: PatenteService){}

    @Get()
    getPatentes(){
        return this.patenteService.getPatentes();
    }
    @Get(':patenteId')
    getPatente(@Param('patenteId') patenteId){
        return this.patenteService.getPatente(parseInt(patenteId));
    }
    @Post()
    createPatente(@Body() patente: CreatePatenteDto){
        console.log(patente.idPatente, patente.cantidadVendida, patente.precioInicial);
        return 'Creando patente';
    }

    @Delete(':id')
    deletePatente(@Param('id') id){   
        return `Eliminando patente ${id}`;
    }

    @Put(':id')
    updatePatente(@Body() patente:CreatePatenteDto, @Param('id') id){
        return `Actualizando patente nº ${id}`;
    }
}
