import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

async function setup() {
  await TestBed.configureTestingModule({
    imports: [App],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(App);
  fixture.detectChanges();
  return { fixture, element: fixture.nativeElement as HTMLElement };
}

describe('App', () => {
  it('si crea correttamente', async () => {
    const { fixture } = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('mostra il brand "Engage Labs" nella navbar', async () => {
    const { element } = await setup();
    expect(element.querySelector('mat-toolbar')).not.toBeNull();
    expect(element.querySelector('.brand')?.textContent).toContain('Engage Labs');
  });

  it('espone i link del menu verso le sezioni ad ancora', async () => {
    const { element } = await setup();
    const hrefs = Array.from(element.querySelectorAll('.site-nav a')).map((a) =>
      a.getAttribute('href'),
    );
    expect(hrefs).toEqual(['#chi-siamo', '#servizi', '#contatti']);
  });

  it('rende il router outlet per la pagina', async () => {
    const { element } = await setup();
    expect(element.querySelector('router-outlet')).not.toBeNull();
  });

  it('da sito pubblico non mostra alcuna UI di logout', async () => {
    const { element } = await setup();
    expect(element.querySelector('button[aria-label="Esci"]')).toBeNull();
  });
});
