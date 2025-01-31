import {Component, Input} from '@angular/core';
import {Attack} from '../../model/attack.model';

@Component({
  selector: 'app-attack',
  imports: [],
  templateUrl: './attack.component.html',
  styleUrl: './attack.component.css'
})
export class AttackComponent {

  @Input() attack?: Attack;

}
