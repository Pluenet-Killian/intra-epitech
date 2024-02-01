import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { NodemailerModule } from 'src/nodemailer/nodemailer.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Module({
  imports: [NodemailerModule, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '60m'}
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
