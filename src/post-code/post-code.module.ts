import { Module } from '@nestjs/common';
import { PostCodeController } from './post-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeEntity } from 'src/home/entities/home.entity';
import { HomeModule } from 'src/home/home.module';

@Module({
  imports: [TypeOrmModule.forFeature([HomeEntity]), HomeModule],
  controllers: [PostCodeController],
})
export class PostCodeModule {}
