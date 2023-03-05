import { IsNotEmpty, IsString } from 'class-validator';

export class NewTodoDTO {
    @IsString()
    @IsNotEmpty()
    text: string;
}