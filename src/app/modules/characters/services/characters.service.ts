import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly URL = environment.url;
  private readonly TENORURL = environment.urlTenor
  private readonly TENORKEY = environment.tenorKey
  constructor(private http: HttpClient) {}

  getFirstCharacters$(): Observable<any> {
    return this.http.get(`${this.URL}/character`)
  }

  getCharactersById$(id: String): Observable<any> {
    return this.http.get(`${this.URL}/character/${id}`)
  }
 
  getCharacterGif$(name: String): Observable<any>{
    return this.http.get(`${this.TENORURL}&key=${this.TENORKEY}&limit=1&q=${name}`)
      // .pipe(
      //   map(({result : {}}))
      //   first(),
      // )

    
  }
}
