class PostCode {
  post_code: string;
}

export class PostCodeDto {
  payload: PostCode[];
  count: number;
}

export class PostCodeDetailDto {
  payload: {
    average: string;
    median: string;
  };
}
