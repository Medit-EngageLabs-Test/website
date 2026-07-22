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

  it('rende la sezione ancorata #chi-siamo con il titolo', async () => {
    const { element } = await setup();
    const section = element.querySelector('#chi-siamo');
    expect(section).not.toBeNull();
    expect(element.querySelector('.section-title')?.textContent).toContain('Chi siamo');
  });
});
