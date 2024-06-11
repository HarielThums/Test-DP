import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('hello')
  async hello() {
    return this.service.hello()
  }
}
