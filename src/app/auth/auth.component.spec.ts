import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocalStorage: jasmine.SpyObj<any>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [
        // { provide: localStorage, useValue: mockLocalStorage },
        { provide: Router, useValue: mockRouter }
      ]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    // mockLocalStorage = TestBed.inject(localStorage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should handle successful admin login', () => {
    component.email = 'admin@admin.com';
    component.password = 'admin';

    component.connexion();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['dashboard']);
  });


  it('should throw error if any field is empty', () => {
    spyOn(component, 'verifChamps');
    component.nom = '';
    component.prenom = 'Marie laure';
    component.email = 'marielaure@gmail.com';
    component.password = 'password';
    component.inscription();
    expect(component.verifChamps).toHaveBeenCalledWith('Desole', 'Veuillez remplir tous les champs', 'error');
  });

  it('should throw error if email is not valid', () => {
    spyOn(component, 'verifChamps');
    component.nom = 'Coly';
    component.prenom = 'Marie laure';
    component.email = 'marielauregmail.com';
    component.password = 'password';
    component.inscription();
    expect(component.verifChamps).toHaveBeenCalledWith('desole', "l'email n'est pas valide", 'error');
  });

  it('should throw error if password length is less than 5', () => {
    spyOn(component, 'verifChamps');
    component.nom = 'Coly';
    component.prenom = 'Marie laure';
    component.email = 'marielaure@gmail.com';
    component.password = 'pass';
    component.inscription();
    expect(component.verifChamps).toHaveBeenCalledWith('desole', 'Le mot de passe doit être supérieur ou égal à 5', 'error');
  });

  it('should add user to tabAdmin and localStorage for valid input', () => {
    spyOn(component, 'verifChamps');
    spyOn(localStorage, 'setItem');
    component.idlastAdmin = 1;
    component.nom = 'Doe';
    component.prenom = 'John';
    component.email = 'john@example.com';
    component.password = 'password';
    component.inscription();
    expect(component.tabAdmin.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('admin', JSON.stringify(component.tabAdmin));
    expect(component.verifChamps).toHaveBeenCalledWith('Bravo', 'Inscription reussi', 'success');
  });
});
