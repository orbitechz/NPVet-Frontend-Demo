import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  data: Usuario[] = [];
  filteredData: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((response: Usuario[]) => {
      this.data = response;
      this.filteredData = [...response]; 
    });
  }

  filterData(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredData = [...this.data]; 
    } else {
      this.filteredData = this.data.filter(usuario => {
        return (
          usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          usuario.cpf.includes(searchTerm) ||
          usuario.username.toLowerCase().includes(searchTerm.toLowerCase())        );
      });
    }
  }
}
