import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcovComponent } from './marcov.component';

describe('HomeComponent', () => {
  let component: MarcovComponent;
  let fixture: ComponentFixture<MarcovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
