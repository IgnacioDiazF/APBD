import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatenteListComponent } from './components/patente/patente-list/patente-list.component';
import { PatenteFormComponent } from './components/patente/patente-form/patente-form.component';
import { TipoinventoListComponent } from './components/tipoinvento/tipoinvento-list/tipoinvento-list.component';
import { TipoinventoFormComponent } from './components/tipoinvento/tipoinvento-form/tipoinvento-form.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'patentes',
    component: PatenteListComponent
  },
  {
    path: 'patentes/add',
    component: PatenteFormComponent
  },
  {
    path: 'patentes/edit/:id',
    component: PatenteFormComponent
  },
  {
    path: 'tipoinventos',
    component: TipoinventoListComponent
  },
  {
    path:'tipoinventos/add',
    component: TipoinventoFormComponent
  },
  {
    path: 'tipoinventos/edit/:id',
    component: TipoinventoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
