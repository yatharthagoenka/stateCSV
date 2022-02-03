import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './authentication/auth/auth.module';
import { UserModule } from './authentication/user.module';
import { StateModule } from './states/state.module';


@Module({
  imports: [
    UserModule,
    AuthModule,
    StateModule,
    MongooseModule.forRoot('mongodb+srv://yg:pRQH6i4UZrJBgXY2@cluster0.6u85h.mongodb.net/stateCSV?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
