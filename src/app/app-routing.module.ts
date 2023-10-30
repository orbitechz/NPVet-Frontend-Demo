import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { AnimalListComponent } from './views/animal/animal-list/animal-list.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';
import { ConsultaListComponent } from './views/consulta/consulta-list/consulta-list.component';

const routes: Routes = [
  {path: "animal", component: AnimalListComponent},
  {path: "usuarios", component: UsuarioListComponent},
  {path: "tutores", component: TutorListComponent},
  {path: "consultas", component: ConsultaListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
