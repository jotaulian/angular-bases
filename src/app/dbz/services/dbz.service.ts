import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {id:uuid(),name: 'Krillin', power: 1000},
    {id:uuid(),name: 'Goku', power: 12000},
  ];

  addCharacter(character: Character):void{
    character.id = uuid(); // Agregamos el id al personaje
    this.characters.push(character);

  }

  deleteCharacterById(uuid: string):void{
    console.log('Borrando personaje con uuid:',uuid);
    // Este filter regresa un nuevo arreglo con la condición entre parentesis. Incluira todos los personajes, excepto el que coincida con el uui que enviamos por parámetros:
    this.characters = this.characters.filter(character=>character.id!==uuid)
  }

}
