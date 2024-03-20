import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { dot } from "node:test/reporters";

@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}

    async signin(dto:AuthDto){
        //find user by email
        const user =
        await this.prisma.user.findUnique({
            where:{
                email:dto.email,
            },
           
        });
         //if user does not exist, throw an error
         if(!user)
         throw new ForbiddenException('Credentials not valid');
         //compare password
         const pwMatches = await argon.verify(user.hash, dto.password);
            if(!pwMatches)
            throw new ForbiddenException('Credentials not valid');
            //return a message
            delete user.hash;
        


        return user;     
       
    }

    async signup(dto:AuthDto){
        //gerar o hash password
        const hash = await argon.hash(dto.password);

        //save o novo user
        try{ 
            const user = await this.prisma.user.create({
                data:{
                    email: dto.email,
                    hash,
                },
                select:{
                    id:true,
                    email:true,
                    cratedAt:true,
                },
                });
            
                    //return o user saved
                    return user;
            
            
                    
                


        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Credentials taken,')
                }
            }throw error
        }
        
    }         
        
    
}