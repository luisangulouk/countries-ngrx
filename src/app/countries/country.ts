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
    polulation: number;
    currencies: Currency[];
    flag: string | null;
}
