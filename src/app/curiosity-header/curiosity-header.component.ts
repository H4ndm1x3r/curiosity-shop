import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-curiosity-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './curiosity-header.component.html',
  styleUrl: './curiosity-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuriosityHeaderComponent {}
