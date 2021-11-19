import {PopularityEnum, SquareUnitsEnum} from '../enums';

import * as faker from 'faker';

const PROPERTIES_COUNT = 10;
export const fakeHouses = []; // IProperty[]
export const generateProperties = () => {
  for (let i = 0; i < PROPERTIES_COUNT; i++) {
    fakeHouses.push({
      uuid: faker.random.uuid(),
      pic: faker.image.city(),
      price: faker.random.number({min: 350000, max: 10000000}),
      agent: faker.name.findName(),
      deposit: faker.random.number({min: 10, max: 30}) + "%",
      hasAlert: faker.random.boolean(),
      rating: faker.random.number({min: 1, max: 5}),
      floor: faker.random.number({min: 1, max: 150}),
      square: faker.random.number({min: 1, max: 150}),
      bedrooms: faker.random.number({min: 1, max: 4}),
      bathrooms: faker.random.number({min: 1, max: 4}),
      popularity: faker.random.arrayElement([
        PopularityEnum.Low,
        PopularityEnum.Medium,
        PopularityEnum.High,
      ]),
      squareUnits: faker.random.arrayElement([
        SquareUnitsEnum.Meters,
        SquareUnitsEnum.Feets,
      ]),
      updatedAt: faker.date.past(),
      address:
        faker.address.streetAddress() +
        ", " +
        faker.address.countryCode() +
        " " +
        faker.address.zipCode() +
        ", " +
        faker.address.country(),
    });
  }
  return {
    total_count: PROPERTIES_COUNT,
    incomplete_results: false,
    data: fakeHouses,
  };
};
generateProperties();
