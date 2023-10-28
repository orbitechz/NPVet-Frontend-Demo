import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';

const routes: Routes = [
  {path: "tutor", component: TutorListComponent},
  {path: "usuario", component: UsuarioListComponent},
  {path: "usuario/register", component: UsuarioDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
