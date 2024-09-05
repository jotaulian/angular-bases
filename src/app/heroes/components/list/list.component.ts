import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Ironman', 'Spiderman', 'Wolverine', 'Deadpool', 'Captain America', 'Black widow']

  public deletedHero: string | undefined = '';

  deleteLastHero():void{
    this.deletedHero = this.heroeNames.pop();
  }
}
