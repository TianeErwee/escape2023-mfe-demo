import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '@bbd-mfe-new/models';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<Cat[]> {
    return this.http.get<Cat[]>('/api/get-cat-images?limit=10&category_ids=2');
  }
}
