import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from "bcrypt"
import * as speakeasy from "speakeasy"
import { LoginUserDto } from './dto/LoginUser.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService,
                private readonly jwtService: JwtService,
                private readonly configService: ConfigService) {}

    async createUser(createUserDto: CreateUserDto) {
        const {email, password, confirmPassword} = createUserDto;
        const user = await this.prismaService.user.findUnique({where: {email}})
        if (password != confirmPassword) throw new ConflictException("Passwords are not the same");
        if (user) throw new ConflictException("User already Exist");
        const hash = await bcrypt.hash(password, 10);
        const secret = speakeasy.generateSecret({length: 20})
        const verificationToken = speakeasy.totp({
            secret: secret.base32,
            encoding: "base32"
        })
        await this.prismaService.user.create({data: {email, password: hash, totpSecret: secret.base32}})
        const payload = {sub: user.id, email: user.email};
        const token = this.jwtService.sign(payload, {
            expiresIn: "60m",
            secret: this.configService.get("JWt_SECRET")
        })
        return {access_token: token, data: "User Created"}
    }

    async loginUser(loginUserDto: LoginUserDto) {
        const {email, password} = loginUserDto;
        const user = await this.prismaService.user.findUnique({where: {email}})
        if (!user) throw new NotFoundException("User not found");
        const decrypted_password = await bcrypt.compare(password, user.password);
        if (!decrypted_password) throw new ForbiddenException("Incorrect identifier");
    }
}
