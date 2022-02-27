import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldiceHomeComponent } from './alldice-home.component';

describe('AlldiceHomeComponent', () => {
  let component: AlldiceHomeComponent;
  let fixture: ComponentFixture<AlldiceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldiceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldiceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
