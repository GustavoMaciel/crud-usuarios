import { Routes, RouterModule } from "@angular/router";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioVerComponent } from './usuario-ver/usuario-ver.component';

const routes: Routes = [
    {
        path: '',
        component: UsuariosListComponent,
    },
    {
        path: "create",
        component: UsuarioCreateComponent,
    },
    {
        path: "ver/:id",
        component: UsuarioVerComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }