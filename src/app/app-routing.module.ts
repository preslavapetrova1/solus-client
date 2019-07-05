import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProjectComponent} from "./components/projects/project/project.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'projects', component:ProjectsComponent,
    children:[
      {path:':projectId',component:ProjectComponent}
    ]},
  {path:'gallery', component:GalleryComponent},
  {path:'about', component:AboutComponent},
  {path:'contacts',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
