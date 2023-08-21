import { Controller, Get, Post, Body, HttpCode, HttpException, HttpStatus, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/entity';
import { CreateTweetDtos, CreateUserDtos } from './dtos/dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("users")
  getUsers():User[]{
    return this.appService.getUsers()
  }

  @Get("tweets")
  getTweets(@Query() query:{page:number}){
    try {
      if(Number(query.page)>0 || query.page===undefined) return this.appService.getTweets(query.page)
      else throw new Error()
    } catch (error) {
      throw new HttpException("Informe uma página válida!", HttpStatus.BAD_REQUEST)

    }
    
  }
  @Get("tweets/:username")
  getUsernameTweets(@Param("username") username:string){
    try {
      return this.appService.getUsernameTweets(username)
    } catch (error) {
      
    }
  }

  @Post("sign-up")
  @HttpCode(200)
  signUp(@Body() body:CreateUserDtos){
    try {
      return this.appService.signUp(body)
    } catch (error) {
      throw new HttpException("All fields are required!", HttpStatus.BAD_REQUEST)
    }
  }

  @Post("tweets")
  postTweet(@Body() body:CreateTweetDtos){
    try {
      return this.appService.postTweet(body)
    } catch (error) {
      if(error.message === "Usuário não encontrado") throw new HttpException(error.message, HttpStatus.UNAUTHORIZED)
      throw new HttpException("All fields are required!", HttpStatus.BAD_REQUEST)
    }
  }
}
