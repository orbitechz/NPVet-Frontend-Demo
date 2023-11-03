import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './views/tutor/tutor-details/tutor-details.component';
import { UsuarioListarComponent } from './views/usuario/usuario-listar/usuario-listar.component';
import { AnamneseListarComponent } from './views/anamnese/anamnese-listar/anamnese-listar.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './views/usuario/usuario-edit/usuario-edit.component';
import { AnimalListComponent } from './views/animal/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './views/animal/animal-details/animal-details.component';

const routes: Routes = [
  {path: "tutores", component: TutorListComponent},
  {path: "tutor/register", component: TutorDetailsComponent},
  {path: "tutor/edit/:id", component: TutorDetailsComponent},
  {path: "tutor/:id", component: TutorDetailsComponent},
  {path: "usuarios", component: UsuarioListarComponent},
  {path: "usuario/register", component: UsuarioDetailsComponent},
  {path: "usuario/edit/:id", component: UsuarioEditComponent},
  {path: "anamneses", component: AnamneseListarComponent},
  {path: "animal", component: AnimalListComponent},
  {path: "animal/cadastro", component: AnimalDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
