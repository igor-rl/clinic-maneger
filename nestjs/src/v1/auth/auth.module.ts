import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './interfaces/auth.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from 'src/v1/auth/aplication/auth.service';
import { KeycloakStrategy } from './strategies/keycloak.strategy';
import { KeycloakAuthGuard } from './guards/keycloak.guard';

@Module({
  imports: [
    PassportModule.register({ }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    HttpModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    KeycloakStrategy,
    KeycloakAuthGuard
  ],
  exports: [AuthService, KeycloakStrategy, PassportModule],
})
export class AuthModule { }
