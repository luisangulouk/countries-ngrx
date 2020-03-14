import * as faker from 'faker/locale/en_US';
import { Country, generateCountries } from './country';

export interface Region {
    numericCode?: string;
    name?: string;
    countries?: Country[];
}

export const generateRegions = (): Region[] => {
    return [
        {
            numericCode: '1',
            name: 'Europe',
            countries: generateCountries()
        },
        {
            numericCode: '2',
            name: 'Asia',
            countries: generateCountries()            
        }
    ];
};