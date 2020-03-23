import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EmpresaCriarComponent } from './empresa-criar/empresa-criar.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { EmpresaListarComponent } from './empresa-listar/empresa-listar.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaListarComponent,
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
