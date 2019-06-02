import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatenteController } from './patente/patente.controller';
import { InventoController } from './invento/invento.controller';
import { AyudanteController } from './ayudante/ayudante.controller';
import { EmpresaController } from './empresa/empresa.controller';
import { RubroempresaController } from './rubroempresa/rubroempresa.controller';
import { InventorController } from './inventor/inventor.controller';
import { ClasificacioninventorController } from './clasificacioninventor/clasificacioninventor.controller';
import { ContratainventorController } from './contratainventor/contratainventor.controller';
import { ContrataayudanteController } from './contrataayudante/contrataayudante.controller';
import { ComprapatenteController } from './comprapatente/comprapatente.controller';
import { TipoinventoController } from './tipoinvento/tipoinvento.controller';
import { ObtencionpatenteController } from './obtencionpatente/obtencionpatente.controller';
import { PatenteService } from './patente/patente.service';
import { PatenteModule } from './patente/patente.module';

@Module({
  imports: [PatenteModule],
  controllers: [AppController, PatenteController, InventoController, AyudanteController, EmpresaController, RubroempresaController, InventorController, ClasificacioninventorController, ContratainventorController, ContrataayudanteController, ComprapatenteController, TipoinventoController, ObtencionpatenteController],
  providers: [AppService, PatenteService],
})
export class AppModule {}
