import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  private data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  public content(): Observable<any>{
    return this.http.get('./assets/data/vendedores.json').pipe(
      map(
        result => result
      )
    );
  }
}
