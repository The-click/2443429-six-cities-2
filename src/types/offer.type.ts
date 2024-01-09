import { CityType } from './city-type.enum';
import { ComfortType } from './comfort-type.enum';
import { HouseType } from './house-type.enum';
import { User } from './user.type';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: CityType;
  prevImage: string;
  images: string[];
  premium: boolean;
  favorites: boolean;
  rating: number;
  houseType: HouseType;
  roomCount: number;
  guestCount: number;
  price: number;
  comfort: ComfortType;
  author: User;
  coordinate: { latitude: number; longitude: number };
  commentCount?: number;
};
