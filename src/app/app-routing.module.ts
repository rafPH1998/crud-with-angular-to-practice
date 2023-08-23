import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './users/index/index.component';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

