import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';
import {Monster} from './model/monster.model';
import {MonsterCardComponent} from './monster/monster-card/monster-card.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [MonsterCardComponent, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  httpClient = inject(HttpClient);
  nav = 'monsters';

  title = 'monster-arena';
  monsters = toSignal(this.httpClient.get('/api/user'));
  leftMonster: Monster = {
    name: 'Lavalak',
    img: 'double-dragon',
    element: 'FIRE',
    attacks: [
      {
        name: 'Fireball',
        element: 'FIRE',
        damage: 4,
        energyCost: 2
      }
    ],
    resistances: [
      'ICE'
    ],
    maxEnergy: 12,
    maxHealth: 10,
    currentHealth: 3,
    currentEnergy: 9
  };
  rightMonster: Monster = {
    name: 'Slimolak',
    img: 'gooey-daemon',
    element: 'ACID',
    attacks: [
      {
        name: 'Splash',
        element: 'ACID',
        damage: 4,
        energyCost: 1
      }
    ],
    resistances: [],
    maxEnergy: 14,
    maxHealth: 12,
    currentHealth: 1,
    currentEnergy: 12
  };

  fightEnabled = true;

  fight() {
    this.fightEnabled = false;
  }
}
