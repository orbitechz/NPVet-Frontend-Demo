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
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { IconsModule } from './modules/icons.module';
import { TableComponent } from './components/table/table.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UsuarioEditComponent } from './views/usuario/usuario-edit/usuario-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    LoginComponent,
    ErrorsComponent,
    TutorListComponent,
    TutorDetailsComponent,
    UsuarioDetailsComponent,
    UsuarioListComponent,
    MensagemComponent,
    TableComponent,
    SearchBarComponent,
    UsuarioEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    NgxMaskDirective, NgxMaskPipe,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
