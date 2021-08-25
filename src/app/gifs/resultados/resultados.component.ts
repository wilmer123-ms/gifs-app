import { Component, OnInit } from '@angular/core';
import { GifsService } from '../servicios/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  get resultados() {
    return this.gifsService.resultados;
  }
}
