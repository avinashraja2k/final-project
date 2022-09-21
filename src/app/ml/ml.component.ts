import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';
@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent implements OnInit {

  constructor(public tst: Serv1Service) { }
  movlist = this.tst.movlist

  ngOnInit(): void {

  }
  fnc(mid:any){
    // console.log(mid);
    this.tst.valu = mid
    // console.log(this.tst);

    // console.log("TEST");
}

}



