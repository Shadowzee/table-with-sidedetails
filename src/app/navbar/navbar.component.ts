import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableserviceService } from '../tableservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  filter = new FormControl('');
  constructor(private tbs:TableserviceService) { }

  ngOnInit(): void {
  }
filterval(){
  this.tbs.filter(this.filter);
}
}
