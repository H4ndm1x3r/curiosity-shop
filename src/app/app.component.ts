import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CuriosityHeaderComponent } from "./curiosity-header/curiosity-header.component";

@Component({
  standalone: true,
  imports: [RouterModule, CuriosityHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
