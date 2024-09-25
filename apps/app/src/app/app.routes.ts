import { Route } from '@angular/router';
import { WeaponItemsComponent } from './weapon-items/weapon-items.component';
import { VitalityItemsComponent } from './vitality-items/vitality-items.component';
import { SpiritItemsComponent } from './spirit-items/spirit-items.component';

export const appRoutes: Route[] = [
  { path: 'weapon', loadComponent: () => WeaponItemsComponent},
  { path: 'vitality', loadComponent: () => VitalityItemsComponent},
  { path: 'spirit', loadComponent: () => SpiritItemsComponent},
  { path: '**', redirectTo: 'weapon' },
];
