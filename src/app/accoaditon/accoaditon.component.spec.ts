import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoaditonComponent } from './accoaditon.component';

describe('AccoaditonComponent', () => {
  let component: AccoaditonComponent;
  let fixture: ComponentFixture<AccoaditonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccoaditonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoaditonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
