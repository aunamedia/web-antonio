import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';

const routes: Routes = [
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'trabajos', component: TrabajosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
