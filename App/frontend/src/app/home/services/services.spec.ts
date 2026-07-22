import { TestBed } from '@angular/core/testing';
import { Services } from './services';

async function setup() {
  await TestBed.configureTestingModule({ imports: [Services] }).compileComponents();
  const fixture = TestBed.createComponent(Services);
  fixture.detectChanges();
  return { fixture, element: fixture.nativeElement as HTMLElement };
}

describe('Services', () => {
  it('si crea correttamente', async () => {
    const { fixture } = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('rende la sezione ancorata #servizi con il titolo', async () => {
    const { element } = await setup();
    expect(element.querySelector('#servizi')).not.toBeNull();
    expect(element.querySelector('.section-title')?.textContent).toContain('Servizi');
  });

  it('rende una scheda per ogni servizio, con icona e titolo', async () => {
    const { element } = await setup();
    const cards = element.querySelectorAll('.service-card');
    expect(cards.length).toBe(4);
    cards.forEach((card) => {
      expect(card.querySelector('mat-icon')).not.toBeNull();
      expect(card.querySelector('h3')?.textContent?.trim().length).toBeGreaterThan(0);
    });
  });
});
