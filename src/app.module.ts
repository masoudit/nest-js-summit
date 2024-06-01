import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { CommissionsModule } from './commissions/commissions.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt.guard';
import { Commission } from './commissions/commissions.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'sqlite',
        // host: configService.get<string>('DB_HOST'),
        // port: configService.get<number>('DB_PORT'),
        database: configService.get<string>('DB_NAME'),
        // password: configService.get<string>('DB_PASSWORD'),
        entities: [User, Commission],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CommissionsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
