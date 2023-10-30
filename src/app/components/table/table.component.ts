import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from './header';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DatePipe]
})
export class TableComponent implements OnInit {
  @Input() headers: Header[] = [];
  @Input() apiUrl: string = '';
  @Input() editPath: string = '';
  @Input() detailsPath: string = '';
  @Input() entidade: string = '';
  @Input() showToggle: boolean = true;
  @Output() buttonClick = new EventEmitter<string>();
  dados: any[] = [];
  carregando: boolean = true;
  datePipe = inject(DatePipe)
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.dados = data;
      this.carregando = false;
    });
  }
  isData(valor: any): boolean {
    let isData = new Date(valor);
    return isData.toString() != 'Invalid Date' ? true : false;
  }

  retornarValor(tableHeader: Header, item: any): string {
    const campo = tableHeader.campo.split('.');
    let valor = item;
    for (const p of campo) {
      if (valor != null) {
        valor = valor[p];
      }
    }
    try {
      let formatedDate = new Date(valor);
      if (
        formatedDate.toString() != 'Invalid Date' 
      ) {
        valor = this.datePipe.transform(valor, "dd/MM/yyyy - HH:mm");
      }
    } catch (error) {}
    return valor;
  }


  // ====================== AÇÕES DA TABELA ====================== 
  onEditClick(entidade: any) {
    const id = entidade.id;
    this.router.navigate([`/${this.editPath}`, id]);
  }
  onDetailsClick(entidade: any){
    this.router.navigate([`/${this.detailsPath}`, entidade.id])
  }
  onToggleClick(entidade: any) {
    if (this.showToggle) {
      const deleteUrl = `http://localhost:8080/api/${this.entidade}/${entidade.id}`;
      this.http.delete(deleteUrl).subscribe((response) => {
        this.getAll();
      });
    }
  }
}
