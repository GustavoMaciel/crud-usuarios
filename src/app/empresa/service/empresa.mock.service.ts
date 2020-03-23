import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IEmpresaService } from './iempresa.service';
import { EmpresaDTO } from '../models/empresaDTO.entity';

@Injectable({
    providedIn: 'root'
})
export class EmpresaMockService implements IEmpresaService {

    empresas: EmpresaDTO[] = [
        new EmpresaDTO(1, "12345678", "Hello Moto", "Razão sicial da motorola", "Missão da motorola", "ação social da motorola"),
        new EmpresaDTO(2, "87654321", "Xiaomi Inc", "Razão sicial da xiaomi", "Missão da xiaomi", "ação social da xiaomi"),
    ]

    lastId: number = 2;

    list(): Observable<Array<EmpresaDTO>> {
        return new Observable<Array<EmpresaDTO>>(
            (obs) => {
                obs.next(this.empresas);
                obs.complete();
            }
        );
    }

    getById(id: number): Observable<EmpresaDTO> {
        let empresaDTO: Observable<EmpresaDTO> = null;
        this.empresas.forEach(element => {
            if (element.id == id) {
                empresaDTO = new Observable<EmpresaDTO>(obs => {
                    obs.next(element);
                    obs.complete();
                });
            }
        });
        return empresaDTO;
    }

    insert(empresa: EmpresaDTO): Observable<EmpresaDTO> {
        empresa.id = ++this.lastId;
        this.empresas.push(empresa);
        return new Observable<any>(
            (obs) => {
                obs.next(empresa);
                obs.complete();
            }
        );
    }

    delete(id: number): Observable<EmpresaDTO> {
        const aux: EmpresaDTO[] = []
        this.empresas.forEach((empresa) => {
            if (empresa.id != id) {
                aux.push(empresa);
            }
        });
        this.empresas = aux;
        return new Observable<any>(
            (obs) => {
                obs.next(true);
                obs.complete();
            }
        );
    }

    update(empresa: EmpresaDTO): Observable<EmpresaDTO> {
        let aux: Observable<EmpresaDTO> = null;
        this.empresas.forEach(element => {
            if (element.id == empresa.id) {
                element.cnpj = empresa.cnpj;
                element.nomeFantasia = empresa.nomeFantasia;
                element.funcionarios = empresa.funcionarios;
                element.visao = empresa.visao;
                element.missao = empresa.missao;
                element.razaoSocial = empresa.razaoSocial;
                aux = new Observable<EmpresaDTO>(obs => {
                    obs.next(element);
                });
            }
        });
        return aux;
    }

    constructor() { }
}
