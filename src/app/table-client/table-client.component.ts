import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableClientDataSource, TableClientItem } from './table-client-datasource';
import { ClientServiceService } from '../client-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TableClientItem>;
  dataSource: TableClientDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nom','prenom'];
  constructor(private clientServiceService: ClientServiceService ) {}
  ngOnInit() {
    //this.clientServiceService.getClient().subscribe((data:any)=>{console.log(data)});

    this.clientServiceService.getClient().subscribe((data:any)=> {
      console.log(data)
      this.dataSource = new TableClientDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
})
 
    
  }

  ngAfterViewInit() {
  
  }
}
