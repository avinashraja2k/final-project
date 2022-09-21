import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
  valu = 0
  movlist=[
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00020838.jpg",
      mname:'SEETHARAMAM',
      mlang:'TAMIL',
      mrating:'(U)',
      mgenre:'DRAMA',
      id:0,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020838.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00021089.jpg",
      mname:'BRAHMASTRA PART ONE : SHIVA',
      mlang:'HINDI/TAMIL ',
      mrating:'(U/A) ',
      mgenre:'ACTION',
      id:1,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00021098.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00021070.jpg",
      mname:'SINAM',
      mlang:'TAMIL ',
      mrating:'(U/A) ',
      mgenre:'ACTION',
      id:2,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00021070.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00018555.jpg",
      mname:'THIRUCHITRAMBALAM',
      mlang:'TAMIL ',
      mrating:'(U/A) ',
      mgenre:'DRAMA',
      id:3,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00018555.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00020968.jpg",
      mname:'DIARY',
      mlang:'TAMIL ',
      mrating:'(U/A) ',
      mgenre:'THRILLER',
      id:4,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00020968.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00017150.jpg",
      mname:'COBRA',
      mlang:'TAMIL ',
      mrating:'(U/A) ',
      mgenre:'ACTION',
      id:5,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00017150.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00017150.jpg",
      mname:'COBRA',
      mlang:'TAMIL ',
      mrating:'(U/A) ',
      mgenre:'ACTION',
      id:6,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00017150.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00021073.jpg",
      mname:'VENDHU THANINDHATHU KAADU',
      mlang:'TAMIL ',
      mrating:' (U/A) ',
      mgenre:' ACTION',
      id:7,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00021073.jpg"
    },
    {
      msrc:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00021159.jpg",
      mname:'KANAM',
      mlang:'TAMIL ',
      mrating:'(U) ',
      mgenre:'THRILLER',
      id:8,
      mimg:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00021159.jpg"
    }
];

  constructor() { }
}
