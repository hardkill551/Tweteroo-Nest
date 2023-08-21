import { IsString, IsNotEmpty, IsUrl } from "class-validator"
import { User } from "src/entities/entity"

export class CreateUserDtos{
    @IsString()
    @IsNotEmpty()
    username:string

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar:string
}

export class CreateTweetDtos{
    @IsString()
    @IsNotEmpty()
    username:string

    @IsString()
    @IsNotEmpty()
    tweet:string
}