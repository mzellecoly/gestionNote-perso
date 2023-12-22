import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionApprenantComponent } from './gestion-apprenant.component';

describe('GestionApprenantComponent', () => {
  let component: GestionApprenantComponent;
  let fixture: ComponentFixture<GestionApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionApprenantComponent]
    });
    fixture = TestBed.createComponent(GestionApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GestionApprenantComponent);
    const gestionApprenant = fixture.componentInstance
    expect(gestionApprenant).toBeTruthy();
  });
});
