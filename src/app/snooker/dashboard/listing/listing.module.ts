import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'listing',
    component: ListingComponent,
 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ListingComponent,
  ]
})
export class ListingModule { }
