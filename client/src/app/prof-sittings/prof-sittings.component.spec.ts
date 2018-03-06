import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSittingsComponent } from './prof-sittings.component';

describe('ProfSittingsComponent', () => {
  let component: ProfSittingsComponent;
  let fixture: ComponentFixture<ProfSittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfSittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
