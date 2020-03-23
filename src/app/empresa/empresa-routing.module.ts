import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EmpresaCriarComponent } from './empresa-criar/empresa-criar.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaCriarComponent,
  },
  {
      path: "create",
      component: EmpresaCriarComponent,
  },
  {
      path: "editar/:id",
      component: EmpresaEditarComponent,
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaRoutingModule { }
