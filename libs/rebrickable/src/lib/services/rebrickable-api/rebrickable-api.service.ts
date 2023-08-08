import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SetListResponse } from '@bbd-mfe-new/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RebrickableApiService {
  constructor(private http: HttpClient) {}

  getSets(
    page: number,
    page_size: number,
    ordering: string,
    search: string,
    theme_id?: number,
    min_year?: number,
    max_year?: number,
    min_parts?: number,
    max_parts?: number
  ): Observable<SetListResponse> {
    const queryParams: { [key: string]: any } = {
      page,
      page_size,
      ordering,
      search,
      theme_id,
      min_year,
      max_year,
      min_parts,
      max_parts,
    };
    let queryString = '';
    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key] !== undefined && queryParams[key] !== null) {
        queryString += `${key}=${queryParams[key]}&`;
      }
    });
    console.log('QUERY STRING', queryString);
    return this.http.get<SetListResponse>(`/api/getsets?${queryString}`);
  }
}
