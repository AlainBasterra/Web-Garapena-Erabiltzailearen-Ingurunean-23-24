import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsagaiaComponent } from './osagaia.component';

describe('OsagaiaComponent', () => {
  let component: OsagaiaComponent;
  let fixture: ComponentFixture<OsagaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsagaiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsagaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
