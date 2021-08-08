import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPageAComponent } from './contents/test-page-a/test-page-a.component';
import { TestPageBComponent } from './contents/test-page-b/test-page-b.component';

const routes: Routes = [
  { path: 'page-a', component: TestPageAComponent },
  { path: 'page-b', component: TestPageBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
