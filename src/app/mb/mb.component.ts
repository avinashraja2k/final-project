import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';
@Component({
  selector: 'app-mb',
  templateUrl: './mb.component.html',
  styleUrls: ['./mb.component.css']
})
export class MbComponent implements OnInit {

  constructor(public serv:Serv1Service) { }

  ngOnInit(): void {
  }

mov = this.serv.movlist[this.serv.valu];

}
