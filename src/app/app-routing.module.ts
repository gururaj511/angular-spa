import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaListComponent } from './spa-list/spa-list.component';
import { FormCreateEditComponent } from './form-create-edit/form-create-edit.component';


const routes: Routes = [
  {
    path: '',
    component: SpaListComponent
  },
  {
    path: 'form',
    component: FormCreateEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
