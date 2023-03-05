import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [
    TodoModule,
    //TODO: add ConfigModule.forRoot
    //TODO: add TypeOrmModule.forRoot
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
