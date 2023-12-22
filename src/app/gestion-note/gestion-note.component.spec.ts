import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GestionNoteComponent } from './gestion-note.component';

describe('GestionNoteComponent', () => {
  let component: GestionNoteComponent;
  let fixture: ComponentFixture<GestionNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionNoteComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 'someValue' }), // Mock de paramMap
            snapshot: {
              paramMap: {
                get: () => 'someValue' // Mock de snapshot.paramMap.get()
              }
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(GestionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GestionNoteComponent);
    const note = fixture.componentInstance
    expect(note).toBeTruthy();
  });
});
