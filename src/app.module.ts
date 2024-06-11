import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`./env`],
      cache: true,
      isGlobal: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
  }
}
