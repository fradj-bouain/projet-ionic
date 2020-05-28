import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoiturePage } from './add-voiture.page';

describe('AddVoiturePage', () => {
  let component: AddVoiturePage;
  let fixture: ComponentFixture<AddVoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVoiturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
