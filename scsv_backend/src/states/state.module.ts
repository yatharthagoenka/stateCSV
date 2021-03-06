import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StateController } from './State.controller';
import { StateSchema } from './schemas/state.schema';
import { StateService } from './state.service';
// import { AuthService } from '../authentication/auth/auth.service';
// import { UserModule } from '../authentication/user.module';
// import { JwtStrategy } from 'src/authentication/auth/jwt.strategy';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'State', schema: StateSchema }]),
  ],
  providers: [StateService],
  controllers: [StateController]
})
export class StateModule {}
