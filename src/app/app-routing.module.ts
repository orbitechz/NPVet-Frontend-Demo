import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { TutorDetailsComponent } from './views/tutor/tutor-details/tutor-details.component';

const routes: Routes = [
  {path: "tutores", component: TutorListComponent},
  {path: "tutor/register", component: TutorDetailsComponent},
  {path: "tutor/edit/:id", component: TutorDetailsComponent},
  {path: "tutor/:id", component: TutorDetailsComponent},
  {path: "usuario", component: UsuarioListComponent},
  {path: "usuario/register", component: UsuarioDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
