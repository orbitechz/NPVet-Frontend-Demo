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
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DatePipe],
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
  isErro = false;
  mensagem!: string;
  toggleEntidade!: any;

  // injects
  modalService = inject(NgbModal);
  datePipe = inject(DatePipe);
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
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
        valor = this.datePipe.transform(valor, 'dd/MM/yyyy - HH:mm');
      }
    } catch (error) {}
    return valor;
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
    this.toggleEntidade = toggleEntidade
    this.modalService.open(template, {size: 'md', centered:true,  windowClass: 'modal-principal'})
  }

  // ====================== SERVICES ======================
  getAll() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (entidades) => {
        this.dados = entidades;
        this.carregando = false;
      },
      error: (error) => {
        this.isErro = true;
        this.mensagem = error.error
      },
    });
  }
}
