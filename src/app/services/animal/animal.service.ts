import { HttpClient, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseURL: string = 'http://localhost:8080/animal'
  http = inject(HttpClient);

  constructor() { }

  getById(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.baseURL}/id/${id}`);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseURL}/all`);
  }

  getAllDesativados(): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseURL}/all/desativados`);
  }

  getAllAtivo(): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseURL}/all/ativos`);
  }

  getByNome(nome: string): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseURL}/nome/${nome}`);
  }

  getByRaca(raca: string): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseURL}/raca/${raca}`)
  }

  getByEspecie(especie: string): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseURL}/especie/${especie}`);
  }

  save(animal: Animal): Observable<Animal>{
    return this.http.post<Animal>(`${this.baseURL}/post`, animal);
  }

  update(animal: Animal): Observable<Animal>{
    return this.http.put<Animal>(`${this.baseURL}/update/${animal.id}`, animal);
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/delete/${id}`);
  }

}
