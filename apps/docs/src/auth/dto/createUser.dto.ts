import {IsEmail, IsNotEmpty, isNotEmpty} from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly confirmPassword: string;
}