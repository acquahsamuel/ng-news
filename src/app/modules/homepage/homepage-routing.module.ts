import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WritingComponent } from './pages/writing/writing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'writings', component: WritingComponent },
  { path: 'blog-details/:id', component: PageDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
