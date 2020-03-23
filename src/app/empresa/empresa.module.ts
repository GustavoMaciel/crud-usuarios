import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaCriarComponent } from './empresa-criar/empresa-criar.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';



@NgModule({
  declarations: [EmpresaCriarComponent, EmpresaEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpresaRoutingModule
  ],
  providers: [
  ]
})
export class EmpresaModule { }
