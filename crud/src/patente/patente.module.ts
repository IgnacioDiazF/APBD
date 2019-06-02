import { Module } from '@nestjs/common';
import { PatenteService } from './patente.service';
import { PatenteController } from './patente.controller';

@Module({
    imports: [],
    controllers: [PatenteController],
    providers: [PatenteService]
})
export class PatenteModule {}
