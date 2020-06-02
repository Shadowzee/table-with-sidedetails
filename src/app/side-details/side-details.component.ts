import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
const sidedetailsdata = [
  {
    list:["asa","dsa","asdsa"]
  },
  {
    list:["yjhgh","Hjghj","Hjghjh"]
  }
  
];
@Component({
  selector: 'app-side-details',
  templateUrl: './side-details.component.html',
  styleUrls: ['./side-details.component.scss']
})
export class SideDetailsComponent implements OnInit {
flag=false;
detailsno;
sidedetailsdata=sidedetailsdata;
  constructor(private tableser: TableserviceService) { }

  ngOnInit(): void {
    this.tableser.detailsflag.subscribe(data=>{
      this.flag=data;
    });
    this.tableser.detailsno.subscribe(data=>{
      this.detailsno=data;
    });
  }

}
