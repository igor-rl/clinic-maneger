import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthCredentialsDto } from './auth.dto';
import { HasRole } from '../gateway/roles.decorator';
import { AuthService } from '../aplication/auth.service';
import { KeycloakAuthGuard } from '../guards/keycloak.guard';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly svc: AuthService) {}

  @ApiOperation({ summary: 'Autenticar com Keycloak' })
  @ApiBody({ type: AuthCredentialsDto, description: 'Credenciais do usuário' })
  @Post('token')
  async getToken(@Body() credentials: AuthCredentialsDto): Promise<any> {
    const { login, password } = credentials;
    return this.svc.getAccessToken(login, password);
  }

  @ApiOperation({ summary: 'Validar um token' })
  @ApiParam({ name: 'token', description: 'Token a ser validado' })
  @Get('valida-token/:token')
  async listarById(@Param('token') token: string) {
    return await this.svc.validaToken(token);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(KeycloakAuthGuard)
  @HasRole('1.1')
  @ApiOperation({ summary: 'Teste de autenticação com keycloak' })
  @HasRole('instituicao-access') // permissao
  @Get('test-auth')
  test(@Req() req: any) {
    return {
      user: req.user,
    };
  }
}
