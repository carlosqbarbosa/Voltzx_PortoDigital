import { CreateProjetoDto } from './dto/create-projeto.dto';
export declare class ProjetosService {
    create(data: CreateProjetoDto): Promise<{
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }>;
    findAll(): Promise<({
        landProject: {
            number: string;
            id: string;
            area: number;
            ownerId: string;
            avaliability: boolean;
            street: string;
            complement: string | null;
            district: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        company: {
            id: string;
            userId: string;
            document_id: string;
            company_name: string;
        } | null;
    } & {
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    })[]>;
    findOne(id: string): Promise<({
        landProject: {
            number: string;
            id: string;
            area: number;
            ownerId: string;
            avaliability: boolean;
            street: string;
            complement: string | null;
            district: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        company: {
            id: string;
            userId: string;
            document_id: string;
            company_name: string;
        } | null;
    } & {
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }) | null>;
    update(id: string, data: Partial<CreateProjetoDto>): Promise<{
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        projectId: string;
        title: string;
        description: string;
        status: import(".prisma/client").$Enums.StatusApproval;
        companiesId: string | null;
        powerKw: number;
        cost: number;
        estimatedReturn: number;
        createdAt: Date;
        area: number;
    }>;
}
