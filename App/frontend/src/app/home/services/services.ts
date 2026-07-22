import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

/** Una voce di servizio: icona Material Symbols, titolo e breve descrizione. */
interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

/** Sezione "Servizi / Cosa facciamo" (ancora #servizi): schede dell'offerta. */
@Component({
  selector: 'app-services',
  imports: [MatIcon],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  // Testo placeholder: sostituire con l'offerta reale di Engage Labs.
  protected readonly services: readonly Service[] = [
    {
      icon: 'code',
      title: 'Sviluppo su misura',
      description:
        'Progettiamo e realizziamo applicazioni costruite intorno ai tuoi processi, non il contrario.',
    },
    {
      icon: 'devices',
      title: 'Web & mobile',
      description:
        'Interfacce moderne e responsive, dal gestionale interno all’app rivolta ai clienti.',
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Architetture cloud scalabili, deploy automatizzati e monitoraggio continuo.',
    },
    {
      icon: 'insights',
      title: 'Consulenza tecnologica',
      description:
        'Ti affianchiamo nelle scelte tecniche, dall’architettura alla roadmap di prodotto.',
    },
  ];
}
