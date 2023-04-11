import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpartComponent } from './lastpart.component';

describe('LastpartComponent', () => {
  let component: LastpartComponent;
  let fixture: ComponentFixture<LastpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
