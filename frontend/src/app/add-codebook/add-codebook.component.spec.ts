import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodebookComponent } from './add-codebook.component';

describe('AddCodebookComponent', () => {
  let component: AddCodebookComponent;
  let fixture: ComponentFixture<AddCodebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCodebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCodebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
