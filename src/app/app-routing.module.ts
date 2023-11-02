import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './views/tutor/tutor-details/tutor-details.component';
 

const routes: Routes = [
  {path: "tutores", component: TutorListComponent},
  {path: "tutor/register", component: TutorDetailsComponent},
  {path: "tutor/edit/:id", component: TutorDetailsComponent},
  {path: "tutor/:id", component: TutorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
