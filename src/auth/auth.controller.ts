import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/dto";
import { Request } from 'express'
import { request } from "http";

//o caminho para o controlador é /auth
@Controller('auth')
export class AuthController{
constructor(private authService:AuthService){}

@Post('signup')
signup(@Body() dto:AuthDto){
    console.log(dto);
    
    return this.authService.signup(dto);
}

@Post('signin')
signin(@Body() dto:AuthDto){
    
    return this.authService.signin(dto);
}

}