import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spirit-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spirit-items.component.html',
  styleUrl: './spirit-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpiritItemsComponent {}
