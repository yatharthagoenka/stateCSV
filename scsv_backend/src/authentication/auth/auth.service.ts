import { Injectable } from '@nestjs/common';
import { Payload } from '../interface/payload';
import { sign } from 'jsonwebtoken';
import { UserService } from '../user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {}
  
  // Generates Token
  async signPayload(payload: Payload) {
    return sign(payload, "secretKey", { expiresIn: '7d' });
  }

  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
 
}
