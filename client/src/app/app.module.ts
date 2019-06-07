import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PatenteFormComponent } from './components/patente/patente-form/patente-form.component';
import { PatenteListComponent } from './components/patente/patente-list/patente-list.component';
import { PatentesService } from './services/patentes.service';
import { TipoinventoListComponent } from './components/tipoinvento/tipoinvento-list/tipoinvento-list.component';
import { TipoinventoFormComponent } from './components/tipoinvento/tipoinvento-form/tipoinvento-form.component';
import { IndexComponent } from './components/index/index.component';
import { InventoListComponent } from './components/invento/invento-list/invento-list.component';
import { InventoFormComponent } from './components/invento/invento-form/invento-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PatenteFormComponent,
    PatenteListComponent,
    TipoinventoListComponent,
    TipoinventoFormComponent,
    IndexComponent,
    InventoListComponent,
    InventoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PatentesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
