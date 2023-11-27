import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TredingP } from './treding-p';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TredingPhhtpService {
  private _url:string="../assets/data/Data.Json"
  constructor(private hc:HttpClient) { 
   
  }
  getProduct():Observable<TredingP[]> {
    return this.hc.get<TredingP[]>(this._url)
  }
}

