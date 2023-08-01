"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ email, name, password }) {
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
    async show(id) {
        return this.prisma.users.findUnique({
            where: {
                id
            }
        });
    }
    async update(id, data) {
        await this.exists(id);
        return this.prisma.users.update({
            data,
            where: {
                id
            }
        });
    }
    async updatePartial(id, data) {
        await this.exists(id);
        return this.prisma.users.update({
            data,
            where: {
                id
            }
        });
    }
    async delete(id) {
        await this.exists(id);
        return this.prisma.users.delete({
            where: {
                id
            }
        });
    }
    async exists(id) {
        if (!(await this.show(id))) {
            throw new common_1.NotFoundException(`O usu�rio ${id} n�o foi encontrado.`);
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map