import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [TodoModule, ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
    isGlobal: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
