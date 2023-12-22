import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DetailsProfesseursComponent } from './details-professeurs.component';

describe('DetailsProfesseursComponent', () => {
  let component: DetailsProfesseursComponent;
  let fixture: ComponentFixture<DetailsProfesseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProfesseursComponent],
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
    fixture = TestBed.createComponent(DetailsProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DetailsProfesseursComponent);
    const detailsProfesseur = fixture.componentInstance
    expect(detailsProfesseur).toBeTruthy();
  });
});
