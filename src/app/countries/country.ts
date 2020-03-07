/* Defines the country entity */
export interface Country {
    countryId: number | null;
    countryName: string;
    capital: string;
    polulation: number;
    currency: string;
    flag: string;
}

export interface Region {
    regionName: string;
    countries: Country[];
}

/**
 * 
a. Name
b. Capital
c. Population 
d. Currencies 
e. Flag
 */