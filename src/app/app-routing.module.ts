import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './snooker/dashboard/dashboard.component';
import { ListingComponent } from './snooker/dashboard/listing/listing.component';
import { LoginComponent } from './snooker/dashboard/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'login', component: LoginComponent
      },
      {
        path: 'listing', component: ListingComponent
      }

    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
