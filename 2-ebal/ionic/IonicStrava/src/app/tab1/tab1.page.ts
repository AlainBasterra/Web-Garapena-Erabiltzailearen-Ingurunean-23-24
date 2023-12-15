import { Component } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  klubak: Kluba[] = [];
  
  constructor(private klubaService: KlubaService) {}
  
  getKlubak(): void{
    this.klubaService.getKlubak()
      .subscribe(data => {this.klubak = data; },
          error => console.log('Error::' + error)); }
  
  ngOnInit(){
    this.getKlubak();
  }
}