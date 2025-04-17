import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInWrapperComponent } from './fade-in-wrapper.component';

describe('FadeInWrapperComponent', () => {
  let component: FadeInWrapperComponent;
  let fixture: ComponentFixture<FadeInWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FadeInWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeInWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
