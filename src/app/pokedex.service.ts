import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Pokemon } from "./shared/pokemon.model";

@Injectable({
  providedIn: "root"
})
export class PokedexService {
  private endpointOne: string = "https://pokeapi.co/api/v2/pokemon/";
  private endpointAll: string = "http://pokeapi.co/api/v2/pokemon?limit=151";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(private http: HttpClient) {}

  getPokemon(id): Observable<any> {
    return this.http.get(this.endpointOne + id + "/").pipe(map(this.extractData));
  }

  getPokemons(): Observable<any> {
    return this.http
      .get(this.endpointAll + "pokemon")
      .pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
