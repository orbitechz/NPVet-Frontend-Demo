import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoUsuario } from 'src/app/models/enums/tipo-usuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.scss'],
  providers: [provideNgxMask()],
})
export class UsuarioDetailsComponent implements OnInit {
  tipoUsuarioEnum = TipoUsuario;
  selectedperfil = '';
  confirmarSenha = '';
  usuario = new Usuario();

  hide = true;
  hide2 = true;

  @Input() isErro = true;
  @Input() mensagem = '';


  constructor(private uService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuario.tipoUsuario = TipoUsuario.SECRETARIA;
  }

  passwordsMatch() {
    return this.usuario.senha === this.confirmarSenha;
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      if (this.passwordsMatch()) {
        this.uService.create(this.usuario).subscribe({
          next: (u) => {
            this.usuario = u;
            this.router.navigate(['/usuario']);
          },
          error: (err) => {
            this.mensagem = err.message;
            this.isErro = true;
          },
        });
      } else {
        this.mensagem = 'As senhas não coincidem.';
        this.isErro = true;
      }
    } else {
      this.mensagem = 'Preencha todos os campos corretamente.';
      this.isErro = true;
    }
  }
  
  

}
