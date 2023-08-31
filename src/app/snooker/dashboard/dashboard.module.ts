import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from 'src/app/snooker/dashboard/login/login.module';
import { DashboardComponent } from './dashboard.component';
import { ListingModule } from './listing/listing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'listing',
        loadChildren: () => import('./listing/listing.module').then(module => module.ListingModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(module => module.LoginModule),
      },
    ]
  },
  { path: '**', redirectTo: 'login' }
]
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LoginModule,
    ListingModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
