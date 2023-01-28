import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardsComponent } from './components/cards/cards.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    HeroComponent,
    PageDetailsComponent,
    ProfileComponent,
    CardsComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
