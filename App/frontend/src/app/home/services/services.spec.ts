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
    expect(element.querySelector('.section-title')?.textContent).toContain('Cosa facciamo');
  });
});
