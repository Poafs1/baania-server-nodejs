import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from 'src/home/home.service';
import { PostCodeDetailDto, PostCodeDto } from './dto/post-code.dto';

@Controller('postCode')
export class PostCodeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async postCode(): Promise<PostCodeDto> {
    return this.homeService.postCode();
  }

  @Get('/:id')
  async postCodeById(@Param('id') id: string): Promise<PostCodeDetailDto> {
    return this.homeService.postCodeById(Number(id));
  }
}
