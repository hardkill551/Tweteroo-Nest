import { IsString, IsNotEmpty, IsUrl } from "class-validator"
import { User } from "src/entities/entity"

export class CreateUserDtos{
    @IsString({message:"All fields are required!"})
    @IsNotEmpty({message:"All fields are required!"})
    username:string

    @IsString({message:"All fields are required!"})
    @IsNotEmpty({message:"All fields are required!"})
    @IsUrl(undefined, {message:"All fields are required!"})
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