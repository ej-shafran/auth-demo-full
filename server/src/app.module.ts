import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [TodoModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
