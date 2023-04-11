import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstblockComponent } from './firstblock.component';

describe('FirstblockComponent', () => {
  let component: FirstblockComponent;
  let fixture: ComponentFixture<FirstblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
