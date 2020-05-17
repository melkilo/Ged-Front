import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class TableClientDataSource extends DataSource<any> {

  private clientDataSource = new BehaviorSubject<any[]>([]);

  constructor(public data: any) {
    super();
  }


  //Connect return data to the 

  /*  Data Table expects this method to return an Observable, 
   and the values of that observable contain the data that the Data Table needs to display. */
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any[]> {
    return this.clientDataSource.pipe(map(() => {
      return this.data['content'];
    }))
 
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  public updateTable(data) {
    this.data['content'] = data['content'];
    this.clientDataSource.next(this.data['content']);
  }
}

