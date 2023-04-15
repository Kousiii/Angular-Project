import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelastComponent } from './pagelast.component';

describe('PagelastComponent', () => {
  let component: PagelastComponent;
  let fixture: ComponentFixture<PagelastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagelastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagelastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
