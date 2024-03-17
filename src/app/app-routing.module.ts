import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base-component/base-component';

const appRoutes: Routes = [
  {
    path: 'graphs',
    component: BaseComponent,
  },
  { path: '',   redirectTo: '/graphs', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
