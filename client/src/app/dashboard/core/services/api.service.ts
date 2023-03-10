import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  public find(endpoint: string, query: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/${endpoint}?${query}`);
  }

  public findOne(endpoint: string, id: string | number) {
    id = id.toString();
    return this.http.get<any>(`${environment.apiUrl}/api/${endpoint}/${id}?populate=deep`);
  }
}
