import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

/** Una voce del menu: etichetta visibile e ancora (id di sezione) verso cui scrollare. */
interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

/** Shell del sito vetrina: header sticky con il brand e il menu ad ancore, sopra la pagina. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly brand = 'Engage Labs';
  protected readonly navLinks: readonly NavLink[] = [
    { label: 'Chi siamo', fragment: 'chi-siamo' },
    { label: 'Servizi', fragment: 'servizi' },
    { label: 'Contatti', fragment: 'contatti' },
  ];
}
