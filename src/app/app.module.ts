import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {AboutComponent} from './components/about/about.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {MenuComponent} from './shared/components/menu/menu.component';
import {LogoComponent} from './shared/components/logo/logo.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ProjectComponent} from './components/projects/project/project.component';
import {ProjectListComponent} from './shared/components/project-list/project-list.component';
import {PhotoGalleryComponent} from './shared/components/photo-gallery/photo-gallery.component';
import {PortfolioService} from './services/portfolio/portfolio.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    GalleryComponent,
    AboutComponent,
    ContactsComponent,
    MenuComponent,
    LogoComponent,
    FooterComponent,
    ProjectComponent,
    ProjectListComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
