import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { AnimalListComponent } from './views/animal/animal-list/animal-list.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';

const routes: Routes = [
  {path: "tutor", component: TutorListComponent},
  {path: "animal", component: AnimalListComponent},
  {path: "usuarios", component: UsuarioListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
