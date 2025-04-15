import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { FormaPag } from './forma-pag.model';

@Injectable({
  providedIn: 'root'
})
export class formaPagService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

showMessage(msg: string): void {

  this.snackBar.open(msg, 'X',{
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })

}

create(formaPag: FormaPag): Observable<FormaPag>{

return this.http.post<FormaPag>(this.baseUrl, formaPag)
}

read(): Observable<FormaPag[]>{
  
  return this.http.get<FormaPag[]>(this.baseUrl)
 }

 readById(id: string): Observable<FormaPag>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<FormaPag>(url)
 }

 update(product: FormaPag): Observable<FormaPag>{

 const url = `${this.baseUrl}/${product.id}`
 return this.http.delete<FormaPag>(url)
 }

delete(id:number): Observable<FormaPag>{

const url = `${this.baseUrl}/${id}`
return this.http.delete<FormaPag>(url)
}



}