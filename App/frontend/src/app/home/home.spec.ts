import { TestBed } from '@angular/core/testing';
import { Home } from './home';

async function setup() {
  await TestBed.configureTestingModule({ imports: [Home] }).compileComponents();
  const fixture = TestBed.createComponent(Home);
  fixture.detectChanges();
  return { fixture, element: fixture.nativeElement as HTMLElement };
}

describe('Home', () => {
  it('si crea correttamente', async () => {
    const { fixture } = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('impagina le sezioni ancorate chi-siamo, servizi e contatti', async () => {
    const { element } = await setup();
    expect(element.querySelector('#chi-siamo')).not.toBeNull();
    expect(element.querySelector('#servizi')).not.toBeNull();
    expect(element.querySelector('#contatti')).not.toBeNull();
  });
});
