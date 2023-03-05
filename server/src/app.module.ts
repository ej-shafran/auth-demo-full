import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TodoModule } from "./todo/todo.module";
import { AuthModule } from './auth/auth.module';
import config from './config';

@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,

      logging: process.env.TYPEORM_LOGGING === 'on',
      synchronize: process.env.TYPEORM_SYNC === 'on',

      entities: ["dist/**/*.entity{.ts,.js}"]
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
