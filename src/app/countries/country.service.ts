import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, combineLatest } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Country } from './country';
import { Region } from './region';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(region: Region): Observable<Country[]> {
    const url = `https://restcountries.eu/rest/v2/region/${region.name}`;
    return this.http.get<any[]>(url)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  getRegions(): Observable<Region[]> {

    return combineLatest([
      this.getCountries({ name: 'asia'}),
      this.getCountries({ name: 'europe'})
      ])
      .pipe(
        map(([asia, europe]) => {   
                let regions = [
                    { numericCode: '1', name: 'Asia', countries: asia },
                    { numericCode: '2', name: 'Europe', countries: europe }
                ]
                return regions;
            })
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
