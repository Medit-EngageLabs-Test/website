import { Component, ChangeDetectionStrategy } from '@angular/core';

/** Sezione "Chi siamo" (ancora #chi-siamo), apertura della landing. */
@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
