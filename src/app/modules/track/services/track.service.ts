import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/Operators';
import { environment } from 'src/environments/environment';
import { TracksModel } from '../../../core/model/tracksmodel';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
private readonly URL=environment.api;
  constructor(private _http:HttpClient) { }

  private skipById(listTracks: TracksModel[], id: number): Promise<TracksModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
   * //TODO {data:[..1,...2,..2]}
   *
   * @returns
   */
  getAllTracks$(): Observable<any> {
    return this._http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }


  /**
   *
   * @returns Devolver canciones random
   */
  getAllRandom$(): Observable<any> {
    return this._http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }

}
