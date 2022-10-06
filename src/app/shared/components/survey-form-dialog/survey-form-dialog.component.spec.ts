import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormDialogComponent } from './survey-form-dialog.component';

describe('SurveyFormDialogComponent', () => {
  let component: SurveyFormDialogComponent;
  let fixture: ComponentFixture<SurveyFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
