import { TestBed } from '@angular/core/testing';
import { SiteFooter } from './site-footer';

async function setup() {
  await TestBed.configureTestingModule({ imports: [SiteFooter] }).compileComponents();
  const fixture = TestBed.createComponent(SiteFooter);
  fixture.detectChanges();
  return { fixture, element: fixture.nativeElement as HTMLElement };
}

describe('SiteFooter', () => {
  it('si crea correttamente', async () => {
    const { fixture } = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('rende il footer ancorato #contatti con il brand', async () => {
    const { element } = await setup();
    const footer = element.querySelector('footer#contatti');
    expect(footer).not.toBeNull();
    expect(footer?.querySelector('.brand')?.textContent).toContain('Engage Labs');
  });

  it('espone un link email mailto', async () => {
    const { element } = await setup();
    const mail = element.querySelector('a[href^="mailto:"]');
    expect(mail?.getAttribute('href')).toBe('mailto:info@engagelabs.it');
  });

  it('mostra la riga di copyright con l’anno corrente', async () => {
    const { element } = await setup();
    const year = new Date().getFullYear().toString();
    expect(element.querySelector('.footer-bottom')?.textContent).toContain(year);
  });
});
