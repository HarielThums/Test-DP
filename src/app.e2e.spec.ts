import { INestApplication, VersioningType } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from '@src/app.module'
import * as request from 'supertest'

describe('App e2e', () => {
  let app: INestApplication

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = module.createNestApplication()
    app.enableVersioning({ type: VersioningType.URI })
    await app.init()
  })

  describe('hello', () => {
    it('should be 200', async () => {
      return request(app.getHttpServer()).get('/hello').expect(200)
    })
  })

  afterAll(async () => await app.close())
})
