import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenorResponse } from '@core/models/gif/tenorResponse.model';
import { Result } from '@core/models/result.model';
import { CharactersService } from '@modules/characters/services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail-page.component.html',
  styleUrl: './character-detail-page.component.css'

})
export class CharacterDetailPageComponent implements OnInit {
  character: Result = {} as Result
  characterGif: TenorResponse = {} as TenorResponse
  searchValue: String = ''

  constructor(private characterService: CharactersService, private router: ActivatedRoute){}

  ngOnInit(): void {
    const characterId = this.router.snapshot.params['id']

    this.characterService.getCharactersById$(characterId).subscribe((response) => {
      this.character = response

      
      this.searchValue = `Rick y morty serie ${this.character.name}`
      this.setGif(this.searchValue)
    })

  }

  setGif(searchValue: String){
    this.characterService.getCharacterGif$(searchValue).subscribe((gif) =>{
      this.characterGif = gif
    })
  }
}
