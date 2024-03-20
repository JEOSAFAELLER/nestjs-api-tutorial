import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources:{
                db:{
                    url: "mysql://JEOSAFA:061284@localhost:3306/nestjs-api-tutorial"
                },
            },
        });
    }
}
