import { UserService } from '@hilma/auth-nest';
import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService
    ) {}
}
