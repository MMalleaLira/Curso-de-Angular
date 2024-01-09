import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Response } from '@core/models/response.model';
import { CharactersService } from '@modules/characters/services/characters.service';
import { CardComponent } from '@shared/card/card.component';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent {
  characters: Response =  {} as Response

  constructor(private characterService: CharactersService){}
  
  ngOnInit(): void {
    this.characterService.getFirstCharacters$().subscribe((data) => {
      this.characters = data;
    })
    
  }
}
