import { Injectable, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { HAS_ROLE_KEY } from '../gateway/roles.decorator';

@Injectable()
export class KeycloakAuthGuard extends AuthGuard('keycloak') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const isAuthed = await super.canActivate(context); // Aqui invocamos a estratégia KeycloakStrategy
    const client_id = process.env.KC_CLIENT_ID;

    if (!isAuthed) {
      throw new UnauthorizedException();
    }

    const requiredRole = String(this.reflector.get<string>(HAS_ROLE_KEY, context.getHandler()));

    if (!requiredRole) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    let userRoles = [];

    if (request.user && request.user.resource_access && request.user.resource_access[client_id]) {
      userRoles = request.user.resource_access[client_id].roles || [];
    }

    if (userRoles.includes(requiredRole)) {
      return true; // Permitir acesso apenas com role `recurso+super` para outros métodos.
    }

    throw new ForbiddenException("Você não tem permissão para acessar esse recurso: ");
  }
}
