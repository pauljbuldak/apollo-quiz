import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizselectorComponent } from './quizselector.component';

describe('QuizselectorComponent', () => {
  let component: QuizselectorComponent;
  let fixture: ComponentFixture<QuizselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
