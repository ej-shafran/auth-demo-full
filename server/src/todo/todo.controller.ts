import { UseJwtAuth } from "@hilma/auth-nest";
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { NewTodoDTO } from "./todo.dto";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseJwtAuth("Admin") //? only admins can access
  @Post("new")
  async postNew(@Body() todo: NewTodoDTO) {
    const { id } = await this.todoService.createOne(todo);
    return id;
  }

  @Get("all") //? anyone can access
  getAll() {
    return this.todoService.readMany();
  }

  @UseJwtAuth() //? only logged in users can access
  @Get("one/:id")
  getById(@Param("id", ParseIntPipe) id: number) {
    return this.todoService.readOne(id);
  }


  @UseJwtAuth() //? only logged in users can access
  @Put("complete/:id")
  async putAsComplete(@Param("id", ParseIntPipe) id: number) {
    await this.todoService.updateOne(id);
    return;
  }
}
