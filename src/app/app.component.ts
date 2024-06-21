import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { data } from './shared/data/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starWars-challenge';

  public step = signal(0);
  public data = data;

  public setStep(operation: '+' | '-') {
    switch (operation) {
      case '+':
        this.step.update((val) => val + 1);
        break;

      case '-':
        this.step.update((val) => val - 1);

        break;

      default:
        break;
    }
  }
}
