import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from './fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl = "http://localhost:3001/fornecedores"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

showMessage(msg: string): void {

  this.snackBar.open(msg, 'X',{
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })

}

create(fornecedor: Fornecedor): Observable<Fornecedor>{

return this.http.post<Fornecedor>(this.baseUrl, fornecedor)
}

read(): Observable<Fornecedor[]>{
  
  return this.http.get<Fornecedor[]>(this.baseUrl)
 }

 readById(id: string): Observable<Fornecedor>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Fornecedor>(url)
 }

 update(fornecedor: Fornecedor): Observable<Fornecedor>{

 const url = `${this.baseUrl}/${fornecedor.id}`
 return this.http.delete<Fornecedor>(url)
 }

delete(id:number): Observable<Fornecedor>{

const url = `${this.baseUrl}/${id}`
return this.http.delete<Fornecedor>(url)
}



}