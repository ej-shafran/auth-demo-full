import { IsString, Length } from "class-validator";

export class RegisterDTO {
    @IsString()
    @Length(5)
    username: string;

    @IsString()
    @Length(8)
    password: string;
}