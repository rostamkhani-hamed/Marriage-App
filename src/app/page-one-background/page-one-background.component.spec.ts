import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneBackgroundComponent } from './page-one-background.component';

describe('PageOneBackgroundComponent', () => {
  let component: PageOneBackgroundComponent;
  let fixture: ComponentFixture<PageOneBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
