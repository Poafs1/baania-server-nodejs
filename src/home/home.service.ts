import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HomeCreateDto, HomeDto, HomeUpdateDto, HomesDto } from './dto/home.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeEntity } from './entities/home.entity';
import { Repository } from 'typeorm';
import { PostCodeDetailDto, PostCodeDto } from 'src/post-code/dto/post-code.dto';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(HomeEntity)
    private homeEntity: Repository<HomeEntity>,
  ) {}

  private mapHome(home: HomeEntity): HomeDto {
    return {
      id: home.id,
      name: home.name,
      desc: home.desc,
      price: home.price.toString(),
      post_code: home.post_code,
    };
  }

  private mapHomes(homes: HomeEntity[], totalCount: number): HomesDto {
    return {
      payload: homes.map((home) => this.mapHome(home)),
      count: totalCount,
    };
  }

  async homeCreate(homeCreate: HomeCreateDto): Promise<HomeDto> {
    const { name, desc, price, post_code } = homeCreate;

    const inserted = await this.homeEntity
      .save(
        this.homeEntity.create({
          name,
          desc,
          price: Number(price),
          post_code,
        }),
      )
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });

    return this.mapHome(inserted);
  }

  async homes(skip: number, take: number): Promise<HomesDto> {
    const [foundHomes, totalCount] = await this.homeEntity
      .findAndCount({
        skip: Number(skip),
        take: Number(take),
        order: {
          id: 'DESC',
        },
      })
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });

    return this.mapHomes(foundHomes, totalCount);
  }

  async homeUpdate(homeId: number, homeUpdate: HomeUpdateDto): Promise<HomeDto> {
    const { name, desc, price, post_code } = homeUpdate;

    const foundHome = await this.homeEntity
      .findOne({
        where: {
          id: Number(homeId),
        },
      })
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });

    if (!foundHome) {
      throw new InternalServerErrorException('Home not found');
    }

    const updatedHome = await this.homeEntity
      .save({
        ...foundHome,
        name,
        desc,
        price: Number(price),
        post_code,
      })
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });

    return this.mapHome(updatedHome);
  }

  async homeDelete(homeId: number): Promise<boolean> {
    await this.homeEntity.delete(Number(homeId)).catch((error) => {
      throw new InternalServerErrorException(error.message);
    });

    return true;
  }

  async postCode(): Promise<PostCodeDto> {
    const uniquePostCodes = await this.homeEntity
      .createQueryBuilder('home')
      .select('DISTINCT home.post_code', 'post_code')
      .getRawMany();

    return {
      payload: uniquePostCodes,
      count: uniquePostCodes.length,
    };
  }

  async postCodeById(postCode: number): Promise<PostCodeDetailDto> {
    const foundHomes = await this.homeEntity
      .find({
        where: {
          post_code: postCode,
        },
      })
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });

    const average = foundHomes.reduce((acc, cur) => acc + cur.price, 0) / foundHomes.length;
    const sortedPrices = foundHomes.map((home) => home.price).sort((a, b) => a - b);
    const median = sortedPrices[Math.floor(sortedPrices.length / 2)];

    return {
      payload: {
        average: average.toString(),
        median: median.toString(),
      },
    };
  }
}
