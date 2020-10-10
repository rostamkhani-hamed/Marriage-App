import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneFooterComponent } from './page-one-footer.component';

describe('PageOneFooterComponent', () => {
  let component: PageOneFooterComponent;
  let fixture: ComponentFixture<PageOneFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
