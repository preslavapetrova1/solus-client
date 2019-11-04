import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ProjectItemComponent} from "./components/projects/project-item/project-item.component";

const routes: Routes = [
  {path: '', redirectTo: 'bg', pathMatch: 'full'},
  {
    path: ':lang',
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'projects/:projectId', component: ProjectItemComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contacts', component: ContactsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
