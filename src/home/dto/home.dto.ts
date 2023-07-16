export class HomeDto {
  id: number;
  name: string;
  desc: string;
  price: string;
  post_code: string;
}

export class HomeCreateDto {
  name: string;
  desc: string;
  price: number;
  post_code: string;
}

export class HomeUpdateDto {
  name: string;
  desc: string;
  price: number;
  post_code: string;
}

export class HomesDto {
  payload: HomeDto[];
  count: number;
}
