import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesticonComponent } from './testicon.component';

describe('TesticonComponent', () => {
  let component: TesticonComponent;
  let fixture: ComponentFixture<TesticonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesticonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
