import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = "../assets/caras dados/cara1.png"
  dadoDerecha = "../assets/caras dados/cara4.png"
  numero1= 1;
  numero2= 2;

  tirarDados(): void {
    this.numero1 = Math.round (Math.random() * 5) + 1;
    this.numero2 = Math.round (Math.random() * 5) + 1;
    this.dadoIzquierda = '../assets/caras dados/cara' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/caras dados/cara' + this.numero2 + '.png'
  }
}
