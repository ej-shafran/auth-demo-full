import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NewTodoDTO } from "./todo.dto";
import { Todo } from "./todo.entity";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>
  ) {}

  createOne(todo: NewTodoDTO) {
    return this.todoRepo.save(todo);
  }

  readOne(id: number) {
    return this.todoRepo.findOneBy({ id });
  }

  readMany() {
    return this.todoRepo.find();
  }

  async updateOne(id: number) {
    this.todoRepo.update(id, { completed: true });
  }
}
