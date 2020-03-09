import { Country } from './country';

export interface Region {
    numericCode?: string;
    name: string;
    countries?: Country[];
}
