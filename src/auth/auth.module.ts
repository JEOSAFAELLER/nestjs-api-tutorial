import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './strategy';

@Module({

    imports:[JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy
    ]
    
})

export class Authmodule{}