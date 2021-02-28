import { NgModule } from '@angular/core';
import { Routes, RouterModule }
 from '@angular/router';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';

const routes: Routes = [
  { path: '', component: BasicosComponent, pathMatch: 'full' },
  { path: 'numeros', component: NumerosComponent },
  { path: 'no-comunes', component: NoComunesComponent },
  { path: 'ordenar', component: OrdenarComponent },
  { path: '**', redirectTo: "", component: BasicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
