import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "", component: DefaultLayoutComponent,
    children: [
      {
        path: "", component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
