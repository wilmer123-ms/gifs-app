import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../servicios/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  buscar() {
    if (this.txtBuscar.nativeElement.value.trim().length  <= 0) {
      return;
    }
    let valor = this.txtBuscar.nativeElement.value;
    // console.log(valor);
    this.txtBuscar.nativeElement.value = '';

    this.gifsService.agregarHistorial(valor);
  }
}
