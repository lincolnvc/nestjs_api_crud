"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInterceptor = void 0;
const operators_1 = require("rxjs/operators");
class LogInterceptor {
    intercept(context, next) {
        const dt = Date.now();
        return next.handle().pipe((0, operators_1.tap)(() => {
            const request = context.switchToHttp().getRequest();
            console.log(`METHOD: ${request.method} URL: ${request.url}`);
            console.log(`Execução levou: ${Date.now() - dt} milisegundos.`);
        }));
    }
}
exports.LogInterceptor = LogInterceptor;
//# sourceMappingURL=log.interceptor.js.map