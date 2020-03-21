import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,) { }

  weatherData(data) {
    return this.http
      .post<any>(
        `${environment.apiUrl}markov/getStates`,
        data
      )
      .pipe(
        map(
          res => {
            return {
              res
            };
          },
          error => {
            return error;
          }
        )
      );
  }

  getFiles = () => {
    return this.http.get<any>(
      `${environment.apiUrl}files`
    ).pipe(
      map(
        res => {
          return {
            res
          };
        },
        error => {
          return error;
        }
      )
    );
  }
}
