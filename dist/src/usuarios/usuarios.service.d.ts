import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosService {
    create(data: CreateUsuarioDto): Promise<{
        id: string;
        createdAt: Date;
        nome: string;
        email: string;
        senha: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        nome: string;
        email: string;
        senha: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        nome: string;
        email: string;
        senha: string;
    } | null>;
    update(id: string, data: Partial<CreateUsuarioDto>): Promise<{
        id: string;
        createdAt: Date;
        nome: string;
        email: string;
        senha: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        nome: string;
        email: string;
        senha: string;
    }>;
}
