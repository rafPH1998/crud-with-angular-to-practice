import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './users/index/index.component';
import { CreateComponent } from './users/create/create.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'create', component: CreateComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

