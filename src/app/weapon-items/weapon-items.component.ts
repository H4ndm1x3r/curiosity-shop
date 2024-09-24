import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weapon-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon-items.component.html',
  styleUrl: './weapon-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponItemsComponent {}
