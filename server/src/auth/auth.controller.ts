import { RequestUser, RequestUserType, UseLocalAuth, UserService } from "@hilma/auth-nest";
import { Body, Controller, NotFoundException, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { RegisterDTO } from "./auth.dto";

const ROLES = Object.freeze({
  ADMIN: { id: 1 },
  USER: { id: 2 },
});

@Controller("auth")
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  async register(@Body() user: RegisterDTO) {
    const { id } = await this.userService.createUser({
      ...user,
      roles: [ROLES.USER],
    });
    return id;
  }

  @Post("admin/register")
  async registerAdmin(@Body() user: RegisterDTO) {
    if (process.env.NEW_ADMINS !== "on") throw new NotFoundException();

    const { id } = await this.userService.createUser({
      ...user,
      roles: Object.values(ROLES),
    });
    return id;
  }

  @UseLocalAuth()
  @Post("login")
  async login(@RequestUser() user: RequestUserType, @Res() res: Response) {
    const body = this.userService.login(user, res);
    return res.send(body);
  }
}
