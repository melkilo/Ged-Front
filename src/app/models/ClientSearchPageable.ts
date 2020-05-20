import { ClientSearchRequest } from './ClientSearchRequest';
import { SortDirection } from '@angular/material/sort';

export class ClientSearchPageableDto {
    clientSearchRequest: ClientSearchRequest;
    sortedBy: String;
    orderBy: String;
    page: number;
    size: number;

    constructor() {
        
        this.clientSearchRequest = new ClientSearchRequest()
        this.sortedBy = "nom";
        this.orderBy = "ASC";
        this.page = 0;
        this.size = 10;


    }
}