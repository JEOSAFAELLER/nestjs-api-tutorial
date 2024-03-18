import { Module } from '@nestjs/common';
import { Authmodule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [Authmodule, UserModule, BookmarkModule, PrismaModule],
})

export class AppModule { }
