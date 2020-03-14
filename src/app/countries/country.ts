import * as faker from 'faker/locale/en_US';

/* Defines the country entity */
export interface Currency {
    code?: string; 
    name?: string;
    symbol?: string | null;
}

export interface Country {
    numericCode: string;
    name: string;
    capital: string;
    population: number;
    currencies: Currency[];
    flag: string | null;
}

export const generateCountry = (): Country => {
    return {
      numericCode: faker.random.number({ min: 100, max: 600 }),
      name: faker.name.firstName(),
      capital: faker.name.firstName(),
      population: faker.random.number({ min: 200, max: 400 }),
      currencies: [{ code:'GBP', name:'BP', symbol:'' }],
      flag: faker.name.firstName()
    };
  };
  
  export const generateCountries = (
    count = faker.random.number({ min: 1, max: 10 })
  ): Country[] => {
    return Array.apply(null, Array(count)).map(() => generateCountry());
  };