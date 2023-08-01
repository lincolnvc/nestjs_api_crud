import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async create ({email, name, password}: CreateUserDTO) {
        return await this.prisma.users.create({
           data: {
             email,
             name,
             password
           },
        });
    }

    async list() {
        return this.prisma.users.findMany({
            where: {
                email: {
                    contains: '@'
                }
            }
        });
    }

    async show(id: number) {
        return this.prisma.users.findUnique({
            where: {
                id 
            }
        });
    }

    async update(id: number, data: UpdatePutUserDTO) {

        await this.exists(id);

        return this.prisma.users.update({
            data,
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, data: UpdatePatchUserDTO) {

        await this.exists(id);

        return this.prisma.users.update({
            data,
            where: {
                id
            }
        });
    }

    async delete(id: number) {
        
        await this.exists(id);

        return this.prisma.users.delete({
            where: {
                id 
            }
        });
    }

    async exists(id: number) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`O usuário ${id} não foi encontrado.`);
        }
    }

}