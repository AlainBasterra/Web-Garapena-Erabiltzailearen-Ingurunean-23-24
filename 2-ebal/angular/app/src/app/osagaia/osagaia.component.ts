import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-osagaia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './osagaia.component.html',
  styleUrls: ['./osagaia.component.css']
})
export class OsagaiaComponent {

  constructor() { }

  // Método para incrementar los 'likes'
  gehituLikes(langilea: any) {
    langilea.likes++;
  }

  // Límite de filas para el *ngFor
  rowLimit = 10; 

  // Datos de ejemplo para los empleados
  langileak = [
    { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, jaiotza: new Date(1980, 1, 1), likes: 0, lanean: true },
    { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, jaiotza: new Date(1985, 6, 15), likes: 0, lanean: true },
    { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, jaiotza: new Date(1990, 3, 20), likes: 0, lanean: true },
    { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, jaiotza: new Date(1975, 10, 30), likes: 0, lanean: true }
  ];

  // Título del componente
  Title = "Langileen zerrenda";

  // Método para obtener el título
  getTitle() {
    return this.Title;
  } 
}
