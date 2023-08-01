import { Body, Controller, Get, Param, Patch, Post, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body: CreateUserDTO) {
        return {body}
    }

    @Get()
    async read() {
        return {users: []}
    }

    @Get(':id')
    async readOne(@Param() params) {
        return {user: {}, params}
    }

    @Put(':id')
    async update(@Body() body: UpdatePutUserDTO, @Param() params) {
        return {
            method: 'put',
            body,
            params
        }
    }

    @Patch(':id')
    async updateParcial(@Body() body: UpdatePatchUserDTO, @Param() params) {
        return {
            method: 'patch',
            body,
            params
        } 
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        }
    }

}