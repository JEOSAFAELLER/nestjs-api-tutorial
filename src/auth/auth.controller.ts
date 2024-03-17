import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

//o caminho para o controlador é /auth
@Controller('auth')
export class AuthController{
constructor(private authService:AuthService){}

@Post('signup')
signup(){
    return 'I am signed up';
}

@Post('signin')
signin(){
    return 'I am signin in';
}

}