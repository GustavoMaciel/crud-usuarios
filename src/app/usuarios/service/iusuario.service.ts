import { Observable } from 'rxjs';
import { UsuarioDTO } from '../models/usuarioDTO.entity';

export interface IUsuarioService {
    list(): Observable<Array<UsuarioDTO>>;
    getById(id: number): Observable<UsuarioDTO>;
    insert(usuario: any): Observable<UsuarioDTO>;
    delete(id: number): Observable<any>;
    update(usuario: UsuarioDTO): Observable<UsuarioDTO>;
}
