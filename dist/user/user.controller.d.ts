import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
export declare class UserController {
    create(body: CreateUserDTO): Promise<{
        body: CreateUserDTO;
    }>;
    read(): Promise<{
        users: any[];
    }>;
    readOne(params: any): Promise<{
        user: {};
        params: any;
    }>;
    update(body: UpdatePutUserDTO, params: any): Promise<{
        method: string;
        body: UpdatePutUserDTO;
        params: any;
    }>;
    updateParcial(body: UpdatePatchUserDTO, params: any): Promise<{
        method: string;
        body: UpdatePatchUserDTO;
        params: any;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
}
