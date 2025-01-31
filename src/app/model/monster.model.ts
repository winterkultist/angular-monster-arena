import {Attack} from './attack.model';

export type Monster = {
  name: string;
  img?: string;
  element: string;
  attacks: Attack[];
  resistances: string[];
  maxEnergy: number;
  currentEnergy?: number;
  maxHealth: number;
  currentHealth?: number;
}
