import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldiceHeaderComponent } from './alldice-header.component';

describe('AlldiceHeaderComponent', () => {
  let component: AlldiceHeaderComponent;
  let fixture: ComponentFixture<AlldiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldiceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
