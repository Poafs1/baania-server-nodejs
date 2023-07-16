interface IConstants {
  globalPrefix: string;
  enableCors: boolean;
}

export const CONSTANTS: IConstants = {
  globalPrefix: '',
  enableCors: process.env.NODE_ENV === 'production',
};
