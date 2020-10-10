import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneMiddleComponent } from './page-one-middle.component';

describe('PageOneMiddleComponent', () => {
  let component: PageOneMiddleComponent;
  let fixture: ComponentFixture<PageOneMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
