import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api/ged/"

  SEARCH = "search";

  public getClient() {

    return this.http.get<any>(this.baseUrl + "getAll/")
  }

  public search(searchPageable) {
    return this.http.post(this.baseUrl + this.SEARCH, searchPageable);
  }


}
