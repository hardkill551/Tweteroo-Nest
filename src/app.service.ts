import { Injectable } from '@nestjs/common';
import { CreateTweetDtos, CreateUserDtos } from './dtos/dtos';
import { Tweet, User } from './entities/entity';

@Injectable()
export class AppService {
  private users:User[] = [];
  private tweet:Tweet[] = [];

  getHello(): string {
    return 'Hello World!';
  }
  getUsers():User[] {
    return this.users
  }
  signUp(body:CreateUserDtos){
    const user = new User(body.username, body.avatar)
    return this.users.push(user)
  }
  postTweet(body:CreateTweetDtos){
    const user = this.users.find(o=>o.username===body.username)
    if(!user) throw new Error("Usuário não encontrado")
    const tweet = new Tweet(user, body.tweet)
    return this.tweet.push(tweet)
  }
  getTweets(){
    return this.tweet
  }
}
