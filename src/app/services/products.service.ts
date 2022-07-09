import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//clase:metodos,atributos o propiedades,constructor
export class ProductsService {

  HOST=`${environment.HOST}/products`;

  constructor( private httpClient:HttpClient) {  }

  findAll():Observable<any>{
    return this.httpClient.get(this.HOST)
  }

  findOne(id:number):Observable<any>{
   return this.httpClient.get(`${this.HOST}/${id}`)
  }

create (payload:any):Observable<any>{
  const url=`${this.HOST}`;
  return this.httpClient.post(url,payload);
}

update(id:number,payload:any):Observable<any>{
  const url=`${this.HOST}/${id}`;
  return this.httpClient.put(url,payload);
}

delete(id:number):Observable<any>{
  const url=`${this.HOST}/${id}`;
  return this.httpClient.delete(url);
}

}
