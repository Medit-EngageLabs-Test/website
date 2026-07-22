import { TestBed } from '@angular/core/testing';
import { About } from './about';

async function setup() {
  await TestBed.configureTestingModule({ imports: [About] }).compileComponents();
  const fixture = TestBed.createComponent(About);
  fixture.detectChanges();
  return { fixture, element: fixture.nativeElement as HTMLElement };
}

describe('About', () => {
  it('si crea correttamente', async () => {
    const { fixture } = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('rende la sezione ancorata #chi-siamo con eyebrow e titolo', async () => {
    const { element } = await setup();
    expect(element.querySelector('#chi-siamo')).not.toBeNull();
    expect(element.querySelector('.eyebrow')?.textContent).toContain('Engage Labs');
    expect(element.querySelector('.section-title')?.textContent).toContain('software');
  });

  it('elenca i valori dell’azienda', async () => {
    const { element } = await setup();
    const values = element.querySelectorAll('.values li');
    expect(values.length).toBe(3);
  });
});
