import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly URL = environment.url;

  constructor(private http: HttpClient) {}

  getFirstCharacters$(): Observable<any> {
    return this.http.get(`${this.URL}/character`)
  }
 
}
