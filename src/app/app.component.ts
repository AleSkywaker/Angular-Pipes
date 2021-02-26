import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frase: string = "AlEx & MaRia";
  mostrarNombre(){
    console.log(this.frase)
  }
}
