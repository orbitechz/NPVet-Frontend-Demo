import { Component, Input, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoUsuario } from 'src/app/models/enums/tipo-usuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.scss']
})
export class UsuarioDetailsComponent implements OnInit{

  tipoUsuarioEnum = TipoUsuario;
  selectedperfil: string = '';
  confirmarSenha: string = '';
  usuario: Usuario = new Usuario();

  uService = inject(UsuarioService);
  router = inject(Router);

  hide = true;
  hide2 = true;

  @Input() isErro: boolean = true;
  @Input() mensagem: string = '';

  ngOnInit(): void {
    this.usuario.tipoUsuario = TipoUsuario.SECRETARIA;
  }

  submitForm(form: NgForm): void {
    if (form.valid && this.usuario.senha === this.confirmarSenha) {
      this.uService.create(this.usuario).subscribe({
        next: (u) => {
          this.usuario = u;
          console.log(this.selectedperfil);
        },
        error: (err) => {
            this.mensagem = err.message;
            this.isErro = true;
        }
      });
    } else {
        this.mensagem = 'Preencha todos os campos corretamente';
        this.isErro = true;
    }
  }
}
