import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Result } from '@core/models/result.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() name: String = ''
  @Input() img: String = ''
  @Input() character: Result = {} as Result
  
  spanishState: Map<String,String> = new Map();

  spanishSpecies: Map<String,String> = new Map();

  ngOnInit(): void {
    this.spanishState.set('Alive', 'Vivo')
    this.spanishState.set('Dead', 'Muerto')
    this.spanishState.set('unknown', 'Desconocido')

    this.spanishSpecies.set('Human', 'Humano')
    this.spanishSpecies.set('Alien', 'Alienigena')
    this.spanishSpecies.set('Human', 'Humano')
  }

}
