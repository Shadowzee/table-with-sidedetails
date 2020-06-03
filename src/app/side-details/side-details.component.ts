import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
const sidedetailsdata = [
  {
    list:["Bundli Technologies","Hector Beverage Private Ltd","Puma sports private limited","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:["Puma sports private limited","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  },
  {
    list:["Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:[,"Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  },
  {
    list:["Bundli Technologies","Hector Beverage Private Ltd","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:["Puma sports private limited","Dewarai Housing","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  },
  {
    list:["Bundli Technologies","Hector Beverage Private Ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:["Puma sports private limited","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
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
