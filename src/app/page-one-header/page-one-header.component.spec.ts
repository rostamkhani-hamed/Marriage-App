import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneHeaderComponent } from './page-one-header.component';

describe('PageOneHeaderComponent', () => {
  let component: PageOneHeaderComponent;
  let fixture: ComponentFixture<PageOneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
