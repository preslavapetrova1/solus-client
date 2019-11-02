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
import {ProjectListComponent} from './shared/components/project-list/project-list.component';
import {PhotoGalleryComponent} from './shared/components/photo-gallery/photo-gallery.component';
import {PortfolioService} from './services/portfolio/portfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { PreviewComponent } from './shared/components/photo-gallery/preview/preview.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import {FormsModule} from "@angular/forms";

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
    ProjectListComponent,
    PhotoGalleryComponent,
    PreviewComponent,
    ProjectItemComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
