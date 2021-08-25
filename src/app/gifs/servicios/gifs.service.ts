import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'VHYbl8AO32O9KX3x9hUFp6A5cRlM5hc9';
  public seriveUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historial: string[];

  // TODO: CAMBIAR ANY POR SU TIPO CORRESPONDIENTE
  public resultados: Gif[];

  constructor(private http: HttpClient) {
    this.resultados = [];
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('data_images')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  agregarHistorial(newHistorial: string) {
    newHistorial = newHistorial.trim().toLocaleLowerCase();

    if (!this._historial.includes(newHistorial)) {
      this._historial.unshift(newHistorial);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // console.log(this._historial);

    const parametros = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', newHistorial)
      .set('limit', '10');

    this.http
      .get<SearchGifsResponse>(`${this.seriveUrl}/search`, {
        params: parametros,
      })
      .subscribe((response) => {
        console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem('data_images', JSON.stringify(this.resultados));
      });
  }
}
