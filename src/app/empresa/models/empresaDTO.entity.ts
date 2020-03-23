import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';

export class EmpresaDTO {
    id: number;
    cnpj: string;
    nomeFantasia: string;
    funcionarios: Array<UsuarioDTO>;

    constructor(id: number, cnpj: string, nomeFantasia: string) {
        this.id = id;
        this.cnpj = cnpj;
        this.nomeFantasia = nomeFantasia;
    }
}
