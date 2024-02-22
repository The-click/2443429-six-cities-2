import dayjs from 'dayjs';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import {
  generateRandomValue,
  getRandomItem,
} from '../../core/helpers/index.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const city = getRandomItem<string>(this.mockData.city);
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const prevImage = getRandomItem<string>(this.mockData.prevImage);
    const images = getRandomItem<string>(this.mockData.images);
    const houseType = getRandomItem<string>(this.mockData.houseType);
    const comfort = getRandomItem<string>(this.mockData.comfort);
    const author = getRandomItem<string>(this.mockData.users);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const roomCount = generateRandomValue(1, 4).toString();
    const rating = generateRandomValue(1, 5).toString();
    const guestCount = generateRandomValue(1, 10).toString();
    const coordinate = getRandomItem<string>(this.mockData.coordinate);
    const premium = getRandomItem<boolean>([true, false]).toString();
    const favorites = getRandomItem<boolean>([true, false]).toString();

    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    return [
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
    ].join('\t');
  }
}
