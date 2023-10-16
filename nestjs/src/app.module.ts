import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './v1/auth/auth.module';
import { PlanoModule } from './v1/plano/plano.module';
import { PlanoModel } from './v1/plano/entities/plano.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('INSTANCE_HOST') || 'localhost',
        port: Number(configService.get<number>('DB_PORT')) || 5432,
        username: configService.get<string>('DB_USER') || 'postgres',
        password: configService.get<string>('DB_PASS') || 'pgpass',
        database: configService.get<string>('DB_NAME') || 'brows-db',
        models: [
          PlanoModel
        ],
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    PlanoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
