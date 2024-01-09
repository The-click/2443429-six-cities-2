import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import {
  CityType,
  ComfortType,
  HouseType,
  Offer,
  UserType,
} from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(
        ([
          title,
          description,
          postDate,
          city,
          prevImage,
          images,
          premium,
          favorites,
          rating,
          houseType,
          roomCount,
          guestCount,
          price,
          comfort,
          author,
          coordinate,
        ]) => ({
          title,
          description,
          postDate: new Date(postDate),
          city: city as CityType,
          prevImage,
          images: images.split(' '),
          premium: premium.toLowerCase() === 'true',
          favorites: favorites.toLowerCase() === 'true',
          rating: Number(rating),
          houseType: houseType as HouseType,
          roomCount: Number(roomCount),
          guestCount: Number(guestCount),
          price: Number(price),
          comfort: comfort as ComfortType,
          author: {
            username: author.split(' ')[0],
            email: author.split(' ')[1],
            password: author.split(' ')[2],
            type: author.split(' ')[3] as UserType,
          },
          coordinate: {
            latitude: Number(coordinate.split(' ')[0]),
            longitude: Number(coordinate.split(' ')[1]),
          },
          commentCount: 0,
        })
      );
  }
}
