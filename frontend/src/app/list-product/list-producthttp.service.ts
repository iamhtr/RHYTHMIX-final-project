import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError, retry } from 'rxjs';
import { IProduct } from './i-list-product';

@Injectable({
  providedIn: 'root'
})
export class ListProducthttpService {
  private apiUrl = '../../assets/data/list-product-info.json/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl)
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  };
}