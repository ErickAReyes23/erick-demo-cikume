import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable,  throwError,startWith } from 'rxjs';
import { Citizen } from '../models/citizen.model';

@Injectable({
  providedIn: 'root'
})

export class CitizenService {
  
  private citizensUrl:string = 'api/citizens/';

  constructor(private _http:HttpClient) {

   }

   /*GET REQUESTS*/
   getCitizens$(): Observable<Citizen[]> {
    return this._http.get<Citizen[]>(this.citizensUrl).pipe(
      //tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  getWomenCitizens$(): Observable<Citizen[]> {
    return this._http.get<Citizen[]>(this.citizensUrl).pipe(
      map(data=>data.filter(citizen => citizen.gender === 'Female')),
        catchError(this.handleError)
    );
  }

  getMenCitizens$(): Observable<Citizen[]> {
    return this._http.get<Citizen[]>(this.citizensUrl).pipe(
      map(data=>data.filter(citizen => citizen.gender === 'Male')),
        catchError(this.handleError)
    );
  }

  /*POST REQUEST*/
  createCitizen$(citizen: Citizen): Observable<Citizen> {
    citizen.id = null;
    return this._http.post<Citizen>(this.citizensUrl, citizen).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(()=>error);
      })
    )
  }

  /*PUT REQUEST*/
  editCitizen$(Citizen: Citizen): Observable<Citizen> {
    return this._http.put<Citizen>(this.citizensUrl + Citizen.id, Citizen);
  }

  /*DELETE REQUEST*/
  deleteCitizen$(id: number | null): Observable<any> {
    return this._http.delete(this.citizensUrl + id);
  }


  private handleError(err: any): Observable<any> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


}
