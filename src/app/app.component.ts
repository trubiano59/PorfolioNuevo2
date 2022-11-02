import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PorfolioNuevo2';

  clickBoton():void{
    alert("Se ha pulsado un Boton")
  }
}

