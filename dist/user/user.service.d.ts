import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ email, name, password }: CreateUserDTO): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    list(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    show(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: number, data: UpdatePutUserDTO): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updatePartial(id: number, data: UpdatePatchUserDTO): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    delete(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    exists(id: number): Promise<void>;
}
