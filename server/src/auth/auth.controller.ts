import { UserService } from "@hilma/auth-nest";
import { Body, Controller, NotFoundException, Post } from "@nestjs/common";
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
}
