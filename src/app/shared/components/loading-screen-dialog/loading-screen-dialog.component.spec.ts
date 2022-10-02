import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingScreenDialogComponent } from './loading-screen-dialog.component';

describe('LoadingScreenDialogComponent', () => {
  let component: LoadingScreenDialogComponent;
  let fixture: ComponentFixture<LoadingScreenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingScreenDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingScreenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
