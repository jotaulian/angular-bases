import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../../../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl:'./list.component.html',
})
export class ListComponent {

  @Output()
  deletedCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
];

  deleteCharacterById(uuid?: string):void{
    if(!uuid) return;
    this.deletedCharacter.emit(uuid);
  }

}
