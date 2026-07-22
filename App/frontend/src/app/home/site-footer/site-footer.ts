import { Component, ChangeDetectionStrategy } from '@angular/core';

/** Footer del sito (ancora #contatti): recapiti minimi e identità aziendale. */
@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {}
