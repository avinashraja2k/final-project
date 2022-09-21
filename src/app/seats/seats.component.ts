import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  msg:string=""
  color:string[]=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
  disvar:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  hold:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  constructor() { }
  ngOnInit(): void {
    if(localStorage.getItem("1")=="1")
    {
      this.book1()
    }
    if(localStorage.getItem("2")=="1")
    {
      this.book2()
    }
    if(localStorage.getItem("3")=="1")
    {
      this.book3()
    }
    if(localStorage.getItem("4")=="1")
    {
      this.book4()
    }
    if(localStorage.getItem("5")=="1")
    {
      this.book5()
    }
    if(localStorage.getItem("6")=="1")
    {
      this.book6()
    }
    if(localStorage.getItem("7")=="1")
    {
      this.book7()
    }
    if(localStorage.getItem("8")=="1")
    {
      this.book8()
    }
    if(localStorage.getItem("9")=="1")
    {
      this.book9()
    }
    if(localStorage.getItem("10")=="1")
    {
      this.book10()
    }
    if(localStorage.getItem("11")=="1")
    {
      this.book11()
    }
    if(localStorage.getItem("12")=="1")
    {
      this.book12()
    }
    if(localStorage.getItem("13")=="1")
    {
      this.book13()
    }
    if(localStorage.getItem("14")=="1")
    {
      this.book14()
    }
    if(localStorage.getItem("15")=="1")
    {
      this.book15()
    }
    if(localStorage.getItem("16")=="1")
    {
      this.book16()
    }
    if(localStorage.getItem("17")=="1")
    {
      this.book17()
    }
    if(localStorage.getItem("18")=="1")
    {
      this.book18()
    }
    if(localStorage.getItem("19")=="1")
    {
      this.book19()
    }
    if(localStorage.getItem("20")=="1")
    {
      this.book20()
    }
    if(localStorage.getItem("21")=="1")
    {
      this.book21()
    }
    if(localStorage.getItem("22")=="1")
    {
      this.book22()
    }
    if(localStorage.getItem("23")=="1")
    {
      this.book23()
    }
    if(localStorage.getItem("24")=="1")
    {
      this.book24()
    }
    if(localStorage.getItem("25")=="1")
    {
      this.book25()
    }
    //  localStorage.setItem("1","0")
    //  localStorage.setItem("2","0")
    // localStorage.setItem("3","0")
    // localStorage.setItem("4","0")
    // localStorage.setItem("5","0")
    // localStorage.setItem("6","0")
    // localStorage.setItem("7","0")
    // localStorage.setItem("8","0")
    // localStorage.setItem("9","0")
    // localStorage.setItem("10","0")
    // localStorage.setItem("11","0")
    // localStorage.setItem("12","0")
    // localStorage.setItem("13","0")
    // localStorage.setItem("14","0")
    // localStorage.setItem("15","0")
    // localStorage.setItem("16","0")
    // localStorage.setItem("17","0")
    // localStorage.setItem("18","0")
    // localStorage.setItem("19","0")
    // localStorage.setItem("20","0")
    // localStorage.setItem("21","0")
    // localStorage.setItem("22","0")
    // localStorage.setItem("23","0")
    // localStorage.setItem("24","0")
    // localStorage.setItem("25","0")

  }

  book1()
  {
    this.color[0]="background-color:red";
    this.hold[0]=true;
    // this.disvar[0]=true;
    // localStorage.setItem("1","1")
  }
  book2()
  {
    this.color[1]="background-color:red";
    this.hold[1]=true;
    this.msg=this.msg+"S"+"1 "
  }
  book3()
  {
    this.color[2]="background-color:red";
    this.hold[2]=true;
    this.msg=this.msg+"S"+"3 "
  }
  book4()
  {
    this.color[3]="background-color:red";
    this.hold[3]=true;
    this.msg=this.msg+"S"+"4 "
  }
  book5()
  {
    this.color[4]="background-color:red";
    this.hold[4]=true;
    this.msg=this.msg+"S"+"5 "
  }
  book6()
  {
    this.color[5]="background-color:red";
    this.hold[5]=true;
    this.msg=this.msg+"S"+"6 "
  }
  book7()
  {
    this.color[6]="background-color:red";
    this.hold[6]=true;
    this.msg=this.msg+"S"+"7 "
  }
  book8()
  {
    this.color[7]="background-color:red";
    this.hold[7]=true;
    this.msg=this.msg+"S"+"8 "
  }
  book9()
  {
    this.color[8]="background-color:red";
    this.hold[8]=true;
    this.msg=this.msg+"S"+"9 "
  }
  book10()
  {
    this.color[9]="background-color:red";
    this.hold[9]=true;
    this.msg=this.msg+"S"+"10 "
  }
  book11()
  {
    this.color[10]="background-color:red";
    this.hold[10]=true;
    this.msg=this.msg+"S"+"11 "
  }
  book12()
  {
    this.color[11]="background-color:red";
    this.hold[11]=true;
    this.msg=this.msg+"S"+"12 "
  }
  book13()
  {
    this.color[12]="background-color:red";
    this.hold[12]=true;
    this.msg=this.msg+"S"+"13 "
  }
  book14()
  {
    this.color[13]="background-color:red";
    this.hold[13]=true;
    this.msg=this.msg+"S"+"14 "
  }
  book15()
  {
    this.color[14]="background-color:red";
    this.hold[14]=true;
    this.msg=this.msg+"S"+"15 "
  }
  book16()
  {
    this.color[15]="background-color:red";
    this.hold[15]=true;
    this.msg=this.msg+"S"+"16 "
  }
  book17()
  {
    this.color[16]="background-color:red";
    this.hold[16]=true;
    this.msg=this.msg+"S"+"17 "
  }
  book18()
  {
    this.color[17]="background-color:red";
    this.hold[17]=true;
    this.msg=this.msg+"S"+"18 "
  }
  book19()
  {
    this.color[18]="background-color:red";
    this.hold[18]=true;
    this.msg=this.msg+"S"+"19 "
  }
  book20()
  {
    this.color[19]="background-color:red";
    this.hold[19]=true;
    this.msg=this.msg+"S"+"20 "
  }
  book21()
  {
    this.color[20]="background-color:red";
    this.hold[20]=true;
    this.msg=this.msg+"S"+"21 "
  }
  book22()
  {
    this.color[21]="background-color:red";
    this.hold[21]=true;
    this.msg=this.msg+"S"+"22 "
  }book23()
  {
    this.color[22]="background-color:red";
    this.hold[22]=true;
    this.msg=this.msg+"S"+"23 "
  }
  book24()
  {
    this.color[23]="background-color:red";
    this.hold[23]=true;
    this.msg=this.msg+"S"+"24 "
  }
  book25()
  {
    this.color[24]="background-color:red";
    this.hold[24]=true;
    this.msg=this.msg+"S"+"25 "
  }
  block()
  {
    for(let i=0;i<25;i++)
    {
      if(this.hold[i]==true)
      {
        this.color[i]=="background-color:red"
        this.disvar[i]==true;
        localStorage.setItem(String(i+1),"1");
      }
    }
    alert("You have booked "+this.msg);
  }
}
