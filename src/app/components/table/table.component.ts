import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { Header } from './header';
import { DatePipe, DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DatePipe, DecimalPipe],
})
export class TableComponent implements OnInit {
  @Input() headers: Header[] = [];
  @Input() apiUrl: string = '';
  @Input() editPath: string = '';
  @Input() detailsPath: string = '';
  @Input() entidade: string = '';
  @Input() title: string = 'Tabela';
  @Input() showToggle: boolean = true;
  @Output() buttonClick = new EventEmitter<string>();
  switchEstado = new FormControl(false);
  dados: any[] = [];
  dadosFiltrados: any[] = []
  carregando: boolean = true;
  isErro = false;
  mensagem!: string;
  toggleEntidade!: any;
  decimalPipe = inject(DecimalPipe);

  // injects
  modalService = inject(NgbModal);
  datePipe = inject(DatePipe);
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.switchEstado.setValue(true)
    this.getAll();
    this.carregando = false
  }

  filtrarEstado() {
    this.search();
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
      if (formatedDate.toString() != 'Invalid Date') {
        valor = this.datePipe.transform(valor, 'dd/MM/yyyy');
      }
    } catch (error) {}
    return valor;
  }
  // ====================== SEARCH  ======================
  search(pesquisa?: string){
    if(pesquisa){
      return this.dados.filter((entidade) => {
        const term = pesquisa.toLowerCase();
        return (
          (entidade.descricao.toLowerCase().includes(term)) &&
          (!this.switchEstado.value || (entidade.delecao === null && this.switchEstado.value))
        );
      });
    }else{
      return this.dados
    }

  }
  // ====================== AÇÕES DA TABELA ======================
  onEditClick(entidade: any) {
    const id = entidade.id;
    this.router.navigate([`/${this.editPath}`, id]);
  }
  onDetailsClick(entidade: any) {
    this.router.navigate([`/${this.detailsPath}`, entidade.id]);
  }
  onToggleClick(template: any, toggleEntidade: number) {
    this.toggleEntidade = toggleEntidade;
    this.modalService.open(template, {
      size: 'md',
      centered: true,
      windowClass: 'modal-principal',
    });
  }

  // ====================== SERVICES ======================
  getAll() {
    this.http.get<any[]>(`${this.apiUrl}/all`).subscribe({
      next: (entidades) => {
        this.dados = entidades;
      },
      error: (error) => {
        this.isErro = true;
        this.mensagem = error.error;
      },
    });
  }
  toggleBtn(entidade: any) {
    if (!entidade.deletedAt) {
      this.http.delete<any>(`${this.apiUrl}/delete/${entidade.id}`).subscribe({
        next: (entidades) => {
          this.getAll();
          this.modalService.dismissAll();
          this.carregando = false;
        },
        error: (error) => {
          this.isErro = true;
          this.mensagem = error.error;
          this.modalService.dismissAll();
        },
      });
    } else {
      this.http
        .post<any>(`${this.apiUrl}/activate/${entidade.id}`, null)
        .subscribe({
          next: (entidades) => {
            this.getAll();  
            this.carregando = false;
            this.modalService.dismissAll();
          },
          error: (error) => {
            this.isErro = true;
            this.mensagem = error.error;
            this.modalService.dismissAll();
          },
        });
    }
  }
}
