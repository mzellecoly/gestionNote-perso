import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailEvaluationComponent } from './detail-evaluation.component';

describe('DetailEvaluationComponent', () => {
  let component: DetailEvaluationComponent;
  let fixture: ComponentFixture<DetailEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailEvaluationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new class', () => {
    const mockLocalStorageData = [{
      profs: [{
        classe: []
      }]
    }];

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockLocalStorageData));
    spyOn(console, 'log');

    component.annee = '2023';
    component.niveaux = 'Niveau A';

    component.ajouterClasse();

    expect(console.log).toHaveBeenCalled();
    expect(component.tabClasse).toBeUndefined();
  });

  it('should not add a new class when fields are empty', () => {
    spyOn(console, 'log');

    component.annee = '';
    component.niveaux = '';

    component.ajouterClasse();

    expect(console.log).not.toHaveBeenCalled();
  });
});
