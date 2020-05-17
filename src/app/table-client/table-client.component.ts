import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientServiceService } from '../client-service.service';
import { TableClientDataSource,  } from './table-client-datasource';
import { ClientSearchPageableDto } from '../models/ClientSearchPageable';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements  OnInit {

  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  dataSource: TableClientDataSource;
   searchRequestPageable: ClientSearchPageableDto = new ClientSearchPageableDto();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nom', 'prenom'];
  constructor(private clientServiceService: ClientServiceService) { }
  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.clientServiceService.search(this.searchRequestPageable).subscribe((data: any) => {
      this.dataSource = new TableClientDataSource(data);
      this.table.dataSource = this.dataSource;
    })
  }

  sortChange($event: MatSort) {
    this.searchRequestPageable.sortedBy = ($event.active)? $event.active : "nom";
    this.searchRequestPageable.orderBy = ($event.direction )  ? $event.direction.toUpperCase() :"ASC"; 
    this.reloadData(this.searchRequestPageable)
  }
  pageChange($event:MatPaginator){;
    this.searchRequestPageable.page = $event.pageIndex;
    this.searchRequestPageable.size = $event.pageSize;
    this.reloadData(this.searchRequestPageable)
  
  }

  reloadData(searchRequestPageable){
    this.clientServiceService.search(searchRequestPageable).subscribe((data: any) => {
      this.dataSource.updateTable(data);
    })
  }


}
