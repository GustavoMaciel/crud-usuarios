import { Component, OnInit } from '@angular/core';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { EmpresaMockService } from '../service/empresa.mock.service';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent implements OnInit {

  loading: boolean = true;
  empresas: Array<EmpresaDTO>;

  constructor(private service: EmpresaMockService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;
    this.service.list().subscribe(
      res => {
        this.loading = false;
        this.empresas = res;
      }, err => {
        console.log(err);
      }
    );
  }

  delete(id: number) {
    this.service.delete(id).subscribe(
      res => {
        this.list();
      }, err => {
        console.log(err)
      }
    );
    return false;
  }

}
