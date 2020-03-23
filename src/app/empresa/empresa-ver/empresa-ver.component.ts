import { Component, OnInit } from '@angular/core';
import { EmpresaDTO } from '../models/empresaDTO.entity';
import { ActivatedRoute } from '@angular/router';
import { EmpresaMockService } from '../service/empresa.mock.service';

@Component({
  selector: 'app-empresa-ver',
  templateUrl: './empresa-ver.component.html',
  styleUrls: ['./empresa-ver.component.css']
})
export class EmpresaVerComponent implements OnInit {

  public empresa: EmpresaDTO;
  
  constructor(private route: ActivatedRoute, private service: EmpresaMockService) { }

  ngOnInit() {
    let id : number = +this.route.snapshot.params["id"];
    this.service.getById(id).subscribe(empresa => {
      this.empresa = empresa;
    }) 
  }
  

}


