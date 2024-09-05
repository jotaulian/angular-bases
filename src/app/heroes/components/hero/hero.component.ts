import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  public showBtnChangeAge: boolean = true;
  public showBtnChangeName: boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDesc():string {
    return `${this.name} - ${this.age}`
  }
  changeHero():void {
    this.name = 'Spiderman'
    this.showBtnChangeName = false;
  }
  changeAge():void {
    this.age = 35;
    this.showBtnChangeAge = false;
  }
}
