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
  
  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: '/assets/img/caraMujer.jpg'
    };
    
    Title="Langileen zerrenda";
    getTitle() {
    return this.Title;
    } 
}
