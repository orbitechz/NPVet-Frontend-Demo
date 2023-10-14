import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'dotenv/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tutor {
  API: string = process.env['BACKEND_URL'] as string;
  http = inject(HttpClient);
  constructor() {}
  getById(id: number): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.API}/id/${id}`);
  }
  getByNome(nome: string): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.API}/nome/${nome}`);
  }
  getAll(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.API}/all`);
  }
  getAllAtivados(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.API}/all/ativos`);
  }
  getAllDesativados(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.API}/all/desativados`);
  }
  getByCpf(cpf: string): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.API}/cpf/${cpf}`);
  }
  getByRg(rg: string): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.API}/rg/${rg}`);
  }
  create(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(`${this.API}/post`, tutor);
  }
  update(id: number, tutor: Tutor): Observable<Tutor> {
    return this.http.put<Tutor>(`${this.API}/update/${id}`, tutor);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/delete/${id}`);
  }
}
