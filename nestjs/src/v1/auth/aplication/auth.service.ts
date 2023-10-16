import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService extends AuthGuard('keycloak') {

  constructor(
    private readonly jwtService: JwtService,
    private readonly http: HttpService
  ) {
    super();
  }

  async getAccessToken(login: string, password: string): Promise<any> {
    const tokenEndpoint = `${process.env.KC_HOST}/realms/${process.env.KC_REALM}/protocol/openid-connect/token`;
    const clientId: string = process.env.KC_CLIENT_ID;
    const clientSecret: string = process.env.KC_CLIENT_SECRET;

    const payload = new URLSearchParams();
    payload.append('grant_type', 'password');
    // payload.append('scope', 'openid');
    payload.append('client_id', clientId);
    payload.append('client_secret', clientSecret);
    payload.append('username', login);
    payload.append('password', password);

    try {
      const response = await this.http
        .post(tokenEndpoint, payload.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .toPromise();

      return { access_token: response.data.access_token };

      // Lógica após obter a resposta, se necessário
    } catch (error) {
      console.log('Erro ao tentar obter o token:', error.message || error);
      return error;
    }
  }

  async validaToken(token: string) {
    const decodeToken = this.jwtService.decode(token);
    if (Math.floor(Date.now() / 1000) >= decodeToken['exp']) {
      throw new UnauthorizedException();
    }
    return {
      id: decodeToken['id'],
      id_corporacao: decodeToken['id_corporacao'],
      id_cadastro: decodeToken['id_cadastro'],
      nome: decodeToken['nome'],
      email: decodeToken['email'],
      perfil: decodeToken['perfil'],
      status: decodeToken['status'],
    };
  }
}
