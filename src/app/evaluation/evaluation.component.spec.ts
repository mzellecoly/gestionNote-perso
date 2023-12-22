import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { EvaluationComponent } from './evaluation.component';

describe('EvaluationComponent', () => {
  let component: EvaluationComponent;
  let fixture: ComponentFixture<EvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationComponent],
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
    fixture = TestBed.createComponent(EvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EvaluationComponent);
    const evaluation = fixture.componentInstance
    expect(evaluation).toBeTruthy();
  });
});
