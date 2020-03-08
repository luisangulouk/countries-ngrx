/* Defines the country entity */
export interface Country {
    id: number | null;
    name: string;
    capital: string;
    polulation: number;
    currency: string;
    flag: string;
}

export interface Region {
    regionName: string;
    countries?: Country[];
}
