import { Component, ChangeDetectionStrategy } from '@angular/core';
import { About } from './about/about';
import { Services } from './services/services';
import { SiteFooter } from './site-footer/site-footer';

/** Landing single-page: impagina in sequenza le sezioni ad ancora e il footer. */
@Component({
  selector: 'app-home',
  imports: [About, Services, SiteFooter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
