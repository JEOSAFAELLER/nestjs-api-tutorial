import { Body, Controller, Get, Patch, Req, UnauthorizedException, UseGuards } from '@nestjs/common';

import { JwtStrategy } from 'src/auth/strategy';

import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { EditUserDto } from './dto/edit-usr.dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { Request } from 'express';




//GET /users/me
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    
constructor(private userService: UserService) {}
  
@Get('me')
  getProfile(@GetUser() user: User,
  ) {

    
    return user;
  }
 

  @Patch()
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}


