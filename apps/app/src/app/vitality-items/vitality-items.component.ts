import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitality-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitality-items.component.html',
  styleUrl: './vitality-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VitalityItemsComponent {}
