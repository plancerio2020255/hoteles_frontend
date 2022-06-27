import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [UsuarioService],
})
export class HotelesComponent implements OnInit {
  public hotelesModelGet: Hotel;
  public token;
  constructor(private _hotelService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerHoteles();
  }

  obtenerHoteles() {
    this._hotelService.obtenerHoteles(this.token).subscribe(
      (response) => {
        this.hotelesModelGet = response.hotel;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
