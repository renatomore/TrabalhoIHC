import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  public content(): Observable<any>{
    return this.http.get('./assets/data/marcas.json').pipe(
      map(
        result => result
      )
    );
  }
}
