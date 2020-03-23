import { Observable } from 'rxjs';
import { EmpresaDTO } from '../models/empresaDTO.entity';

export interface IEmpresaService {
    list(): Observable<Array<EmpresaDTO>>;
    getById(id: number): Observable<EmpresaDTO>;
    insert(usuario: any): Observable<EmpresaDTO>;
    delete(id: number): Observable<any>;
}
