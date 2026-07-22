import { Component, ChangeDetectionStrategy } from '@angular/core';

/** Footer del sito (ancora #contatti): recapiti minimi e identità aziendale. */
@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  // Recapiti placeholder: sostituire con quelli reali di Engage Labs.
  protected readonly email = 'info@engagelabs.it';
  protected readonly address = 'Via Example 1, 00100 Roma (RM)';
  protected readonly year = new Date().getFullYear();
}
