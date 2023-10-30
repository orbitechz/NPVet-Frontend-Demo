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
  @Input() actions: any[] = [];
  @Input() editPath: string = '';
  @Input() entityName: string = '';
  @Input() showDeleteButton: boolean = true;
  @Input() showEndButton: boolean = true;
  @Input() pedidoStatus: string = '';
  @Output() buttonClick = new EventEmitter<string>();
  dados: any[] = [];
  carregando: boolean = true;
  datePipe = inject(DatePipe)
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
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

  onEditClick(item: any) {
    const entityId = item.id;
    this.router.navigate([`/${this.editPath}`, entityId]);
  }

  onDeleteClick(data: any) {
    if (this.showDeleteButton) {
      const deleteUrl = `http://localhost:8080/api/${this.entityName}/${data.id}`;
      this.http.delete(deleteUrl).subscribe((response) => {
        this.loadData();
      });
    }
  }

  onViewClick(item: any) {
    const entityId = item.id;
    this.p.getPedidoById(entityId).subscribe({
      next: (pedido) => {
        this.pedidoStatus = pedido.status;
      },
      error: (error) => {
        console.log(error);
      },
    });
    if (this.pedidoStatus == Status.PENDENTE) {
      this.router.navigate([`/pedidos/finalizar-pedido`, entityId]);
    }
  }
}
