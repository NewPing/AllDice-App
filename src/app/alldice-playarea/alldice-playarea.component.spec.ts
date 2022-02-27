import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldicePlayareaComponent } from './alldice-playarea.component';

describe('AlldicePlayareaComponent', () => {
  let component: AlldicePlayareaComponent;
  let fixture: ComponentFixture<AlldicePlayareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldicePlayareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldicePlayareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
