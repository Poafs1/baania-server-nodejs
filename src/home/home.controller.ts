import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeCreateDto, HomeDto, HomeUpdateDto, HomesDto } from './dto/home.dto';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('')
  async homes(@Query('skip') skip: string, @Query('take') take: string): Promise<HomesDto> {
    return this.homeService.homes(Number(skip), Number(take));
  }

  @Post('')
  async homeCreate(@Body() homeCreate: HomeCreateDto): Promise<HomeDto> {
    return this.homeService.homeCreate(homeCreate);
  }

  @Patch('/:id')
  async homeUpdate(@Param('id') id: string, @Body() homeUpdate: HomeUpdateDto): Promise<HomeDto> {
    return this.homeService.homeUpdate(Number(id), homeUpdate);
  }

  @Delete('/:id')
  async homeDelete(@Param('id') id: string): Promise<boolean> {
    return this.homeService.homeDelete(Number(id));
  }
}
