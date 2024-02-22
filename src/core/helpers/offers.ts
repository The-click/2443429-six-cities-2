import { CityType, ComfortType, HouseType, Offer, UserType } from '../../types';

export function createOffer(offerData: string): Offer {
  const [
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
  ] = offerData.replace('\n', '').split('\t');

  return {
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
  };
}
