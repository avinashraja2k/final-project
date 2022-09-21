import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbComponent } from './mb/mb.component';
import { MlComponent } from './ml/ml.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [
  {path:'' ,component:MlComponent },
  {path:'detail' ,component:MbComponent },
  {path:'seats',component:SeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
