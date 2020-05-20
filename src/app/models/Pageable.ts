export class Pageable {

    sortedBy: string;
    orderBy: string;
    page: number;
    size: number;

    constructor() {

        this.sortedBy = "id";
        this.orderBy = "ASC";
        this.page = 0;
        this.size = 10;


    }


}