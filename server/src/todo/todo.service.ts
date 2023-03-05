import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoDTO } from "./todo.dto";
import { Todo } from "./todo.entity";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>
  ) {}

  async createOne(todo: TodoDTO) {
    const { id } = await this.todoRepo.save(todo);
    return id;
  }

  readOne(id: number) {
    return this.todoRepo.findOneBy({ id });
  }

  readMany() {
    return this.todoRepo.find();
  }

  updateOne(id: number) {
    return this.todoRepo.update(id, { isCompleted: true });
  }
}
