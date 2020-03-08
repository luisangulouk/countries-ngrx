import { Country } from './country';

export interface Region {
    id?: number | null;
    name: string;
    countries?: Country[];
}
