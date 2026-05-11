import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create.profile.dto';
import { UpdateProfileDto } from './dto/update.profile.dto';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('age') age: number) {
    return { message: `This action returns all profiles with age ${age}`, age };
  }

  // get single profile by id

  @Get(':id')
  getProfileById(@Param('id') id: string) {
    return [{ id }];
  }

  //   create a new profile

  @Post()
  createNewProfile(@Body() CreateProfileDto: CreateProfileDto) {
    return [CreateProfileDto];
  }

  // update a profile by id

  @Patch(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() UpdateProfileDto: UpdateProfileDto,
  ) {
    return {
      id,
      ...UpdateProfileDto,
    };
  }
}
