import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from 'src/auth/strategy';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
