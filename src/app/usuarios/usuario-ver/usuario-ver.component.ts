import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from '../models/usuarioDTO.entity';
import { ActivatedRoute } from '@angular/router';
import { UsuarioMockService } from '../service/usuariomock.service';

@Component({
  selector: 'app-usuario-ver',
  templateUrl: './usuario-ver.component.html',
  styleUrls: ['./usuario-ver.component.css']
})
export class UsuarioVerComponent implements OnInit {

  public usuario : UsuarioDTO;

  constructor(private route: ActivatedRoute, private service: UsuarioMockService) { }

  ngOnInit() {
    let id : number = +this.route.snapshot.params["id"];
    this.service.getById(id).subscribe(usuario => {
      this.usuario = usuario;
    }) 
  }

}
