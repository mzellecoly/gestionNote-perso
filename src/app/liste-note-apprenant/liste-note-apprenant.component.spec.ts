import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNoteApprenantComponent } from './liste-note-apprenant.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ListeNoteApprenantComponent', () => {
  let component: ListeNoteApprenantComponent;
  let fixture: ComponentFixture<ListeNoteApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 'someValue' }), // Simuler les paramètres de la route
            snapshot: {
              paramMap: {
                get: () => 'someValue'
              }
            }
          }
        }
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNoteApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ListeNoteApprenantComponent);
    const listeNote = fixture.componentInstance
    expect(listeNote).toBeTruthy();
  });
});
