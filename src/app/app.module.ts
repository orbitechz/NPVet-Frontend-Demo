import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { ErrorsComponent } from './core/errors/errors.component';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './views/tutor/tutor-details/tutor-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { IconsModule } from './modules/icons.module';
import { TableComponent } from './components/table/table.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioListarComponent } from './views/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './views/usuario/usuario-edit/usuario-edit.component';
import { AnimalListComponent } from './views/animal/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './views/animal/animal-details/animal-details.component';
import { ConsultaListComponent } from './views/consulta/consulta-list/consulta-list.component';
import { ConsultaDetailsComponent } from './views/consulta/consulta-details/consulta-details.component';
import { RegisterBtnComponent } from './components/register-btn/register-btn.component';
import { IndexComponent } from './core/index/index.component';
import { ConsultaAnamneseDetailsComponent } from './views/anamnese/consulta-anamnese-details/consulta-anamnese-details.component';
import { ExameListComponent } from './views/exame-fisico/exame-list/exame-list.component';
import { ExameDetailsComponent } from './views/exame-fisico/exame-details/exame-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    LoginComponent,
    ErrorsComponent,
    TutorListComponent,
    TutorDetailsComponent,
    MensagemComponent,
    TableComponent,
    SearchBarComponent,
    HeaderComponent,
    UsuarioListarComponent,
    UsuarioDetailsComponent,
    UsuarioEditComponent,
    AnimalListComponent,
    AnimalDetailsComponent,
    ConsultaListComponent,
    ConsultaDetailsComponent,
    RegisterBtnComponent,
    IndexComponent,
    ExameListComponent,
    ExameDetailsComponent,
    ConsultaAnamneseDetailsComponent
  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSlideToggleModule,
    BrowserAnimationsModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
