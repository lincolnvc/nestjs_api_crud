import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDTO): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    read(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    readOne(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(body: UpdatePutUserDTO, id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        birthAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updateParcial(body: UpdatePatchUserDTO, id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
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
}
