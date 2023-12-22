import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; 
import { of } from 'rxjs';
import { DetailsApprenantsComponent } from './details-apprenants.component';

describe('DetailsApprenantsComponent', () => {
  let component: DetailsApprenantsComponent;
  let fixture: ComponentFixture<DetailsApprenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsApprenantsComponent],
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
    fixture = TestBed.createComponent(DetailsApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DetailsApprenantsComponent);
    const detailsApprenant = fixture.componentInstance
    expect(detailsApprenant).toBeTruthy();
  });
});
