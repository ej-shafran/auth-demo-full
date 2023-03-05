import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ) {}

    //TODO: make this only for Admins
    @Post("new")
    postNew(@Body() todo: TodoDTO) {
        return this.todoService.createOne(todo);
    }

    //TODO: make this only for Users
    @Get("one/:id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.todoService.readOne(id);
    }

    @Get("all")
    getAll() {
        return this.todoService.readMany();
    }

    //TODO: make this only for Users
    @Put("complete/:id")
    putAsComplete(@Param("id", ParseIntPipe) id: number) {
        return this.todoService.updateOne(id);
    }
}
