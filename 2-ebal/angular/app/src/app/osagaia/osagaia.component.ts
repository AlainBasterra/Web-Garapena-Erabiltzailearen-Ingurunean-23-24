import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-osagaia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './osagaia.component.html',
  styleUrl: './osagaia.component.css'
})
export class OsagaiaComponent{

  constructor() { }
  gehituLikes(langilea: any)
  { langilea.likes++; }

  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: '/assets/img/caraMujer.jpg'
    };

  langileak = [
    { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes: 0, lanean: true },
    { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes: 0, lanean: true },
    { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes: 0, lanean: true },
    { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes: 0, lanean: true }
    ];
    myText = "Nire izena: <h1>aLAIN</h1> da";
    Title="Langileen zerrenda";
    getTitle() {
    return this.Title;
    } 
}
