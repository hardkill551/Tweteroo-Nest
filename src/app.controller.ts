import { Controller, Get, Post, Body, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/entity';
import { CreateTweetDtos, CreateUserDtos } from './dtos/dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("users")
  getUsers():User[]{
    return this.appService.getUsers()
  }
  @Post("sign-up")
  @HttpCode(200)
  signUp(@Body() body:CreateUserDtos){
    return this.appService.signUp(body)
  }
  @Post("tweets")
  postTweet(@Body() body:CreateTweetDtos){
    try {
      return this.appService.postTweet(body)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT)
    }
    
  }
  @Get("tweets")
  getTweets(){
    return this.appService.getTweets()

  }
}
