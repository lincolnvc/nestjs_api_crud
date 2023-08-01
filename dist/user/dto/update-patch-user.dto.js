"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatchUserDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class UpdatePatchUserDTO extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDTO) {
}
exports.UpdatePatchUserDTO = UpdatePatchUserDTO;
//# sourceMappingURL=update-patch-user.dto.js.map