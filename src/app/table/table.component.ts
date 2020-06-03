import { Component, OnInit ,PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TableserviceService } from '../tableservice.service';
interface Data {
  date: string;
  listName: string;
  entity: number;
  action: string;
}
const data: Data[] = [
  {
    date: 'Jul 23',
    listName: 'Competitive Intelligence',
    entity: 0,
    action: ''
  },
  {
    date: 'June 23',
    listName: 'My vendors',
    entity: 2,
    action: ''
  }, {
    date: 'Mar 4',
    listName: 'Test_30_Results',
    entity: 28,
    action: ''
  },
  {
    date: 'Jul 3',
    listName: 'To_index',
    entity: 100,
    action: ''
  }, {
    date: 'Jun 23',
    listName: 'KPMG Requested',
    entity: 0,
    action: ''
  },
  {
    date: 'Oct 6',
    listName: 'Two companies',
    entity: 2,
    action: ''
  }, {
    date: 'Feb 19',
    listName: 'Custom',
    entity: 20,
    action: ''
  },
  {
    date: 'Jan 22',
    listName: 'Mumbai',
    entity: 2,
    action: ''
  }
  
];

function search(text: string, pipe: PipeTransform): Data[] {
  return data.filter(country => {
    const term = text.toLowerCase();
    return country.date.toLowerCase().includes(term)
    ||country.listName.toLowerCase().includes(term)
      
        || pipe.transform(country.entity).includes(term);
  });
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DecimalPipe]
})
export class TableComponent implements OnInit {

  
  data$: Observable<Data[]>;
  filter = new FormControl('');
  setClickedRow : Function;
  selectedRow;
  constructor(private pipe: DecimalPipe,private tableser:TableserviceService) { 
    this.setClickedRow = function(index){
      this.selectedRow = index;
  }
    this.tableser.filterval.subscribe(data=>{
      this.filter=data;
     
      this.data$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => search(text, pipe))
      );
    })
  }

  ngOnInit(): void {
    
  }

  details(i){
this.tableser.flagtrue(i);
  }
}
