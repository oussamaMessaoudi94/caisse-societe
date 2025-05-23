import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecaissementComponent } from './decaissement.component';

describe('DecaissementComponent', () => {
  let component: DecaissementComponent;
  let fixture: ComponentFixture<DecaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecaissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
