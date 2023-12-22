import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEvaluationComponent } from './detail-evaluation.component';

describe('DetailEvaluationComponent', () => {
  let component: DetailEvaluationComponent;
  let fixture: ComponentFixture<DetailEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEvaluationComponent]
    });
    fixture = TestBed.createComponent(DetailEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DetailEvaluationComponent);
    const detailEvaluation = fixture.componentInstance
    expect(detailEvaluation).toBeTruthy();
  });

  it('should not add Classe if annee or niveaux is empty', () => {
    component.annee = '';
    component.niveaux = '';
    const initialTabClasseLength = component.tabClasse.length; // Stocke la longueur initiale

    component.ajouterClasse(); // Appelle la méthode

    // Vérifie que la longueur de tabClasse reste inchangée
    expect(component.tabClasse.length).toBe(initialTabClasseLength);
  });

  it('should add Classe when annee and niveaux are provided', () => {
    component.annee = '2023';
    component.niveaux = 'Niveau 1';

    const initialClasseLength = component.classeRecup[0].profs[0].classe.length;

    component.ajouterClasse();

    // Verify that a Classe is added
    expect(component.classeRecup[0].profs[0].classe.length).toBe(initialClasseLength + 1);

    // Add further assertions if needed to ensure the correct data is added
    // For example, checking the properties of the newly added Classe
  });

  it('should clear fields after adding Classe', () => {
    component.annee = '2023';
    component.niveaux = 'Niveau 1';

    component.ajouterClasse();

    // Verify that the fields are cleared after adding a Classe
    expect(component.annee).toBe('');
    expect(component.niveaux).toBe('');
  });
});
