import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient ) {}

 // let ur="http://localhost:8080/api/ged/getAllClients";

public getClient(){return this.http.get<any>("http://localhost:8080/api/ged/getAllClients")}


}
