import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/servicios/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  get listaHistorial(): string[] {
    return this.gifsService.historial;
  }

  buscar(paramas: string) {
    console.log(paramas);
    this.gifsService.agregarHistorial(paramas);
  }
}
