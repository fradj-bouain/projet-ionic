import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoiturePage } from './update-voiture.page';

describe('UpdateVoiturePage', () => {
  let component: UpdateVoiturePage;
  let fixture: ComponentFixture<UpdateVoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVoiturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
