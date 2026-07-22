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

  it('rende il footer ancorato #contatti', async () => {
    const { element } = await setup();
    expect(element.querySelector('footer#contatti')).not.toBeNull();
  });
});
