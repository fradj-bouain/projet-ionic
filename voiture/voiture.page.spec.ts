import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiturePage } from './voiture.page';

describe('VoiturePage', () => {
  let component: VoiturePage;
  let fixture: ComponentFixture<VoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
